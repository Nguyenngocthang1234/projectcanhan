const CategoryList = () =>{
  return (
      <main>
      <h1>Dashboard</h1>
      <div className="date">
        <input type="date" />
      </div>
      <div className="insights">
        <div className="sales">
          <span className="material-symbols-outlined">monitoring</span>
          <div className="middle">
            <div className="left">
              <h3>
                Total Sale
              </h3>
              <h1>
                $25,024
              </h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* end sale  */}
        <div className="expenses">
          <span className="material-symbols-outlined">show_chart</span>
          <div className="middle">
            <div className="left">
              <h3>
                Total Expense
              </h3>
              <h1>
                $14,160
              </h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* end expensive  */}
        <div className="income">
          <span className="material-symbols-outlined"> signal_cellular_alt</span>
          <div className="middle">
            <div className="left">
              <h3>
                Total Income
              </h3>
              <h1>
                $10,864
              </h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* end income  */}
      </div>
      {/* end insights  */}
      <div className="recent-order">
        <h2>
          Danh sách danh mục
        </h2>
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Ảnh sản phẩm</th>
              <th>Giá</th>
              <th>Action</th>
              <th />
            </tr>
          </thead><tbody>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td>
              <div className="button-container">
        <button className="btn primary-btn">Sửa</button>
        <button className="btn danger-btn">Xoá</button>
        
    </div>
    </td>
    <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td>
              <div className="button-container">
        <button className="btn primary-btn">Sửa</button>
        <button className="btn danger-btn">Xoá</button>
        
    </div>
    </td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td>
              <div className="button-container">
        <button className="btn primary-btn">Sửa</button>
        <button className="btn danger-btn">Xoá</button>
        
    </div>
    </td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td>
              <div className="button-container">
        <button className="btn primary-btn">Sửa</button>
        <button className="btn danger-btn">Xoá</button>
        
    </div>
    </td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td>
              <div className="button-container">
        <button className="btn primary-btn">Sửa</button>
        <button className="btn danger-btn">Xoá</button>
        
    </div>
    </td>
              <td className="primary">Details</td>
            </tr>
          </tbody>
        </table>
        <div className="show-all">
          <a href="#">Show All</a>
        </div>
      </div>
    </main>
  )
}
export default CategoryList