import { NavLink } from 'react-router-dom';
import { useCreateOrderMutation } from '../../../store/slices/api/templateApi';
import { isApproved } from '../../../store/hooks';
import {
  SubmitButton,
  EmptyOrderDiv,
  EmptyOrderText,
  SubmitButtonDiv,
} from './CurrentOrderPage.styled';
import EmptyOrderIcon from '../../../assets/empty-order-icon.svg';
import { OrderItem } from '../../../store/slices/api/templateApi.generated';
import { FunctionComponent } from 'react';

interface SubmitSectionProps {
  currentOrder: [OrderItem];
  poNum: string | null;
}

const SubmitSection: FunctionComponent<SubmitSectionProps> = ({
  currentOrder,
  poNum,
}) => {
  const approved = isApproved();

  const [submitOrder, { isLoading }] = useCreateOrderMutation();

  const emptyOrder = !currentOrder || currentOrder.length < 1;

  return (
    <>
      {emptyOrder ? (
        <EmptyOrderDiv>
          <img src={EmptyOrderIcon} height={56} />
          <EmptyOrderText>
            You do not have any products in your current order. Visit the{' '}
            <NavLink to='/products'>products page</NavLink> to add to your
            current order
          </EmptyOrderText>
        </EmptyOrderDiv>
      ) : (
        <SubmitButtonDiv>
          <SubmitButton
            variant='danger'
            loading={isLoading}
            disabled={!approved}
            onClick={() => {
              submitOrder({
                body: {
                  orderItems: currentOrder,
                  poNumber: poNum,
                },
              });
            }}
          >
            Submit Order
          </SubmitButton>
        </SubmitButtonDiv>
      )}
    </>
  );
};

export default SubmitSection;
