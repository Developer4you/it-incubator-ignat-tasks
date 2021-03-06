import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeValue = (value: number) => {
        if (value2 - 1 >= value) setValue1(value)
    }

    const changeValues = (values: [number, number]) => {
        if (values[0] + 1 <= value2) setValue1(values[0]);
        if (values[1] - 1 >= value1) setValue2(values[1]);

    };

    return (
        <div>
            <hr/>

            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    value={value1}
                    onChangeRange={changeValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={changeValues}
                    value={[value1, value2]}
                />

            </div>

            <hr/>
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
