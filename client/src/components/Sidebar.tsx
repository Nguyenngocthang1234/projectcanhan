import { ReactNode } from 'react';
import { Link} from 'react-router-dom';



const Sidebar = ({ children }: { children: ReactNode }) => {
  // const navigate = useNavigate()
  // const handleLogOut = () =>{
  //   window.localStorage.removeItem('token')
  // }
 



  return (
   <div className="container">
    
  <aside>
    <div className="top">
      <div className="logo">
        <img src="../../images/logo2.png" />
        <h2>KIEN<span className="danger">DAO</span></h2>
      </div>
      {/* END LOGO */}
      <div className="close" id="close-btn">
        <span className="material-symbols-outlined">
          close
        </span>
      </div>
      {/* END BTN_CLOSE */}
    </div>
    {/* END TOP  */}
    <div className="sidebar">
      <Link to="#">
        <span className="material-symbols-outlined">grid_view</span>
        <h3>Dashboard</h3>
        </Link>
      <Link to={'/admin/products/list'}>
        <span className="material-symbols-outlined">inventory_2</span>
        <h3>Sản phẩm</h3>
      </Link>
    
      <Link to={'/admin/products/add'}>
        <span className="material-symbols-outlined">add_business</span>
        <h3>Thêm sản phẩm</h3>
      </Link>
      <Link to={'/admin/category/list'}>
        <span className="material-symbols-outlined">category</span>
        <h3>Danh mục</h3>
      </Link>
      <Link to={'/admin/category/add'}>
      <span className="material-symbols-outlined">
add_ad
</span>
        <h3>Thêm danh mục</h3>
      </Link>
      <Link to="/admin/customer/list">
        <span className="material-symbols-outlined">person</span>
        <h3>Khách hàng</h3>
      </Link>
      <Link to="/admin/order/list">
        <span className="material-symbols-outlined">list_alt</span>
        <h3>Orders</h3>
      </Link>
      <a href="#">
        <span className="material-symbols-outlined">monitoring</span>
        <h3>Analytics</h3>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">mail</span>
        <h3>Messenges</h3>
        <span className="message-count">26</span>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">report</span>
        <h3>Reports</h3>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">logout</span>
        <h3>Logout</h3>
      </a>
    </div>
  </aside>
  {/* END ASIDE */}
  {children}
  {/* End Main  */}
  <div className="right">
    <div className="top">
      <button id="menu-btn">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="theme-toggler">
        <span className="material-symbols-outlined active">light_mode</span>
        <span className="material-symbols-sharp">dark_mode</span>
      </div>
      <div className="profile">
        <div className="info">
          <p>Hey <b>KienDao</b> </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src="/images/avatar.jpg" />
        </div>
      </div>
    </div>
    {/* END TOP  */}
    <div className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        <div className="update">
          <div className="profile-photo">
            <img src="/images/avatar2.jpg"  />
          </div>
          <div className="messenge">
            <p> <b>Mike Tyson</b> Received his order of Night Lion tech GPS drone </p>
            <small className="text-muted">2 Minutes Ago</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <img src="/images/avatar3.jpg"/>
          </div>
          <div className="messenge">
            <p> <b>DatVilla</b> give you 400 million VND </p>
            <small className="text-muted">4 Minutes Ago</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <img src="/images/avatar4.jpg"/>
          </div>
          <div className="messenge">
            <p> <b>Jack</b> lost 5 million VND</p>
            <small className="text-muted">6 Minutes Ago</small>
          </div>
        </div>
      </div>
      {/* END UPDATES  */}
    </div>
    {/* END RECENT-UPDATES  */}
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      <div className="item online">
        <div className="icon">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </div>
        <div className="right">
          <div className="info">
            <h3>ONLINE ORDERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="success">+39%</h5>
          <h3>3849</h3>
        </div>
      </div>
      {/* ==== */}
      <div className="item offline">
        <div className="icon">
          <span className="material-symbols-outlined">
            local_mall
          </span>
        </div>
        <div className="right">
          <div className="info">
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>1100</h3>
        </div>
      </div>
      {/* ==== */}
      <div className="item customers">
        <div className="icon">
          <span className="material-symbols-outlined">
            person
          </span>
        </div>
        <div className="right">
          <div className="info">
            <h3>NEW CUSTOMERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="success">+25%</h5>
          <h3>869</h3>
        </div>
      </div>
      {/* ==== */}
      <a className="item add-product">
        <div>
          <span className="material-symbols-outlined">
            add
          </span>
          <h3>Add Product</h3>
        </div>
      </a>
    </div>
    {/* End sale analytic  */}
  </div>
  {/* END RIGHT  */}
</div>

  );
}

export default Sidebar