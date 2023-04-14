import { Response } from 'express';
import { IOrder } from '../models';
import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';
import OrderService from '../services/order';
import NotificationService from '../services/notifications';

async function createOrder(
  req: AuthenticatedRequest,
  res: Response<{ order: IOrder }>,
) {
  const {
    user: { _id: customer, email },
    body: { orderItems },
  } = req;

  const order = await OrderService.createOrder({
    customer, // userId
    orderItems,
  });

  // Send order confirmation email
  await NotificationService.sendOrderConfirmationEmail(email, orderItems);

  return res.status(201).json({ order });
}

async function getOrders(
  req: AuthenticatedRequest,
  res: Response<{ orders: IOrder[] }>,
) {
  const { user } = req;
  const orders = await OrderService.getOrders(user._id);

  return res.status(200).json({ orders });
}

export default {
  getOrders,
  createOrder,
};
