import React, {ChangeEvent} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (values: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        ...restProps
    }
) => {

    const onChangeCallbackForUpperInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value1 = value ? value[0] : 0
        onChangeRange && onChangeRange([value1, +e.currentTarget.value])
    }
    const onChangeCallbackForLowerInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value2 = value ? value[1] : 0
        onChangeRange && onChangeRange([+e.currentTarget.value, value2])
    }
    const finalRangeClassName1 = `${s.range} ${s.upperInputClassName}`
    const finalRangeClassName2 = `${s.range} ${s.lowerInputClassName}`
    return (
        <div className={s.wrap}>
            <div className={s.values}>
                <span className={s.lowerValue}>{value && value[0]}</span>
                <span className={s.upperValue}>{value && value[1]}</span>
            </div>
            <input
                type={'range'}
                onChange={onChangeCallbackForUpperInput}
                className={finalRangeClassName2}
                value={value && value[1]}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={onChangeCallbackForLowerInput}
                className={finalRangeClassName1}
                value={value && value[0]}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

        </div>
    )
}

export default SuperDoubleRange
