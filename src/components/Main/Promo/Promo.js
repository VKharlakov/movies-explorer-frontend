import { useTranslation } from 'react-i18next'
import './Promo.css'

function Promo() {
    //Translation
    const { t } = useTranslation()

    return (
        <section className='promo'>
            <h1 className='promo__title'>{t('promo.title')}</h1>
        </section>
    )
}

export default Promo