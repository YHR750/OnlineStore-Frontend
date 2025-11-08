import {ShoppingCart} from 'lucide-react';

function CartIcon() {
  return (
    <div className='relative cursor-pointer'>
        <ShoppingCart size={28} color='#333' />
        {/*Optional badge*/}
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
            
        </span>
    </div>
  )
}

export default CartIcon