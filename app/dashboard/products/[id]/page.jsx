import { fetchProduct } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({ params }) => {
  const { id } = params
  const product = await fetchProduct(id)
  console.log(product)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer} >
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label > Title</label>
          <input type="text" name="title" placeholder={product.title} />

          <label > Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label > Stock</label>
          <input type="number" name="Stock" placeholder={product.stock} />

          <label > Color</label>
          <input type="text" name="color" placeholder={product.color} />

          <label >Size</label>
          <textarea name="text" placeholder={product.size}></textarea>

          <label >Cat</label>
          <select name="cat" id="cat">
            <option value="Kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label >Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder={product.desc}></textarea>
          <button> Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
