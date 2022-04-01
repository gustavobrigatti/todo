import * as C from './styles';
import {Item} from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item,
    handleChangeDone: (done: boolean, id: number) => void
}

export const ListItem = ({ item, handleChangeDone }: Props) =>{
    const [isChecked, setIsChecked] = useState(item.done);

    const onChange = (done: boolean) => {
        setIsChecked(done);
        handleChangeDone(done, item.id)
    }
    
    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => onChange(e.target.checked)}
            />
            <label>{ item.name } - { item.done.toString() }</label>
        </C.Container>
    );
}