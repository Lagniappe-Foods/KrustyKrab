import { FunctionComponent, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectCurrentOrder } from '../../../store/slices/orderSlice';
import { Root, Header, Title } from './CurrentOrderPage.styled';
import DeadlineBanner from './DeadlineBanner';
import PendingApprovalBanner from './PendingApprovalBanner/PendingApprovalBanner';
import SubmitSection from './SubmitSection';
import CurrentOrder from './CurrentOrder/CurrentOrder';
import PoNumberSection from './PoNumberSection/PoNumberSection';

const CurrentOrderPage: FunctionComponent = () => {
  const [poNum, setPoNum] = useState<string>(null);

  const currentOrder = useAppSelector(selectCurrentOrder);

  return (
    <Root>
      <PendingApprovalBanner />

      <Header>
        <Title className='mb-4'>Current Order</Title>
        <DeadlineBanner />
      </Header>

      <PoNumberSection
        currentOrder={currentOrder}
        poNum={poNum}
        setPo={setPoNum}
      />

      <CurrentOrder currentOrder={currentOrder} />

      <SubmitSection currentOrder={currentOrder} poNum={poNum} />
    </Root>
  );
};

export default CurrentOrderPage;
