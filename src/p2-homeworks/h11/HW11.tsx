import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeValue = (value: number) => {
        if ( value>=value2) setValue2(value+1)
        setValue1(value)
    }

    const changeValues = (values: [number, number])=> {
        if (values[1]>value1) setValue2(values[1])
        if ( values[0]>=value2) setValue2(values[0]+1)
        setValue1(values[0])

    };


    return (
        <div>
            <hr/>


            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value = {value1}
                    onChangeRange={changeValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>

                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={changeValues}
                    value={[value1,value2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
