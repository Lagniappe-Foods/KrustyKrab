import { FunctionComponent, useRef, useState } from 'react';
import { PoInput, Root, Text } from './PoNumberSection.styled';
import { BigButton } from '../../../../components/ProductRow/ProductRow.styled';

const PoNumberSection: FunctionComponent = () => {
  const [poNum, setPoNum] = useState(null);
  const poRef = useRef<HTMLInputElement>();

  const handlePoChange = () => {
    console.log(poRef.current.value);
    setPoNum(poRef.current.value);
  };

  if (!poNum)
    return (
      <Root>
        <div className='mb-2'>
          <Text>
            Do you want to attach a PO Number to your order? *OPTIONAL*
          </Text>
        </div>
        <div>
          <PoInput className='mr-2' ref={poRef} />
          <BigButton onClick={handlePoChange} className='mx-2'>
            Add PO Number
          </BigButton>
        </div>
      </Root>
    );

  return (
    <Root>
      <div className='mb-2'>
        <Text>Attached PO Number: {poNum}</Text>
      </div>
      <div>
        <BigButton onClick={() => setPoNum(null)}>Edit PO Number</BigButton>
      </div>
    </Root>
  );
};

export default PoNumberSection;
