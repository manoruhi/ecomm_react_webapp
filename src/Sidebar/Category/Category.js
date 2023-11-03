import Input from '../../components/Input';
import './Category.css';

function Category({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <Input onChange={handleChange} type = "radio" value = "" name = "test" />
          <span className='checkmark'></span>All
        </label>
      </div>
    </div>
  );
}

export default Category;