import styles from './Merch.module.css';
import  { ProductCard } from '../../components/ProductCard';

const prod = [
    { title: "Gawr Gura cap", price: 19.99, imageUrl: "src/assets/MerchIcons/Gura1.png", hoverImageUrl: "src/assets/MerchIcons/Gura2.png"},
    { title: "Nina Kosaka cup", price: 14.99, imageUrl: "src/assets/MerchIcons/Nina1.png", hoverImageUrl: "src/assets/MerchIcons/Nina2.png"},
    { title: "Vox Akuma plush", price: 49.99, imageUrl: "src/assets/MerchIcons/Vox1.png", hoverImageUrl: "src/assets/MerchIcons/Vox2.png"},
    { title: "Houshou Marine nendroid", price: 79.99, imageUrl: "src/assets/MerchIcons/Marine1.png", hoverImageUrl: "src/assets/MerchIcons/Marine1.png"},
    { title: "Usada Pekora t-shirt", price: 24.99, imageUrl: "src/assets/MerchIcons/Pekora1.png", hoverImageUrl: "src/assets/MerchIcons/Pekora1.png"},
    { title: "Chibidoki mousepad", price: 29.99, imageUrl: "src/assets/MerchIcons/Chibi1.png", hoverImageUrl: "src/assets/MerchIcons/Chibi1.png"},
];


function Merch() {
    return (
            <div>
                <div className={styles.global_padding}>
                    <div className={styles.global_gridding}>
                        <img src="./src/assets/MerchIcons/BANNER1.png" alt="Banner" className={styles.banner}/>
                        <div className={styles.products}>
                            {prod.map(product => (
                            <ProductCard title={product.title} price={product.price} ps = "*Price is VAT inclusive" imageUrl={product.imageUrl} hoverImageUrl={product.hoverImageUrl}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Merch;