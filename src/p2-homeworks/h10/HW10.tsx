import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {switchLoadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import s from './HW10.module.css'
import preloader from './prealoder.gif'

function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(switchLoadingAC());
        setTimeout(()=>{
            dispatch(switchLoadingAC());
            },1000)

    };

    return (
        <div>
            <hr/>
            <h3>Homeworks 10</h3>

            {isLoading
                ? (
                    <div className={s.preloader_box}>
                        <img className={s.preloader} src={preloader}  alt='preloader'/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
