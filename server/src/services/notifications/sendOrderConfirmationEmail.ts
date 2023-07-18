/* eslint-disable prettier/prettier */
import { OrderItem } from '../../models';
import { sendEmail } from './sendEmail';

export async function sendOrderConfirmationEmail(
  email: string,
  company: string,
  orderItems: [OrderItem],
): Promise<void> {
  const customerMailOptions = {
    to: email,
    from: 'order@lagniappefoods.com',
    subject: 'Your Order is Confirmed!',
    html: `<h2>Your order was placed successfully</h2>
          <h4>We will be processing this order as soon as possible. Keep in mind 
          orders are delivered on Wednesdays. Any orders placed after Tuesday at 
          noon will be scheduled for the following Wednesday</h4>
   
            <a href=${process.env.BASE_URL}> 
              View all of your placed orders from your profile dashboard
            </a>`,
  };

  const lagniappeMailOptions = {
    to: 'order@lagniappefoods.com',
    from: 'order@lagniappefoods.com',
    subject: 'New Customer Order Placed!',
    html: `<h2>View the new order in the admin dashboard if needed</h2>
          <h4>User: ${email}</h4>
          <h4>Company: ${company}</h4>
          <h4>Order: </h4>

          <div>
            <table style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Description</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${orderItems.map(
                  (orderItem) =>
                    `<tr>
                      <td>${orderItem.product.itemId}</td>
                      <td>${orderItem.product.description}</td>
                      <td>${orderItem.quantity}</td>
                    </tr>`,
                )}
              </tbody>
            </table
          </div>

        
            <a href=${process.env.BASE_URL}/admin>
              View order in admin dashboard
            </a>
        `,
  };

  // Send Lagniappe new user order email
  await sendEmail(lagniappeMailOptions);

  // Send customer order confirmation email
  await sendEmail(customerMailOptions);
}
