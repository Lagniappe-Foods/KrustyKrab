import { FunctionComponent, useRef } from 'react';
import { PoInput, Root, Text } from './PoNumberSection.styled';
import { AddToCartButton } from '../../../../components/ProductRow/ProductRow.styled';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';

interface PoNumberSectionProps {
  poNum: string;
  setPo: (val: string) => void;
  currentOrder: [OrderItem];
}

const PoNumberSection: FunctionComponent<PoNumberSectionProps> = ({
  poNum,
  setPo,
  currentOrder,
}) => {
  const poNumberRef = useRef<HTMLInputElement>();

  const handlePoChange = () => {
    setPo(poNumberRef.current.value);
  };

  const emptyOrder = !currentOrder || currentOrder.length < 1;

  if (emptyOrder) return;

  if (!poNum)
    return (
      <Root>
        <div className='mb-2'>
          <Text>
            Do you want to attach a PO Number to your order? *OPTIONAL*
          </Text>
        </div>
        <div>
          <PoInput className='mr-2' ref={poNumberRef} />
          <AddToCartButton onClick={handlePoChange} className='mx-2'>
            Add PO Number
          </AddToCartButton>
        </div>
      </Root>
    );

  return (
    <Root>
      <div className='mb-2'>
        <Text>Attached PO Number: {poNum}</Text>
      </div>
      <div>
        <AddToCartButton onClick={() => setPo(null)}>
          Edit PO Number
        </AddToCartButton>
      </div>
    </Root>
  );
};

export default PoNumberSection;
