const recentOrders = [
  {
    id: 'ORD-45678',
    product: 'Laptop + Accessories',
    price: '$1,299',
    status: 'Processing',
  },
  {
    id: 'ORD-43123',
    product: 'Wireless Mouse',
    price: '$18',
    status: 'Delivered',
  },
]

function CustomerPanel() {
  return (
    <div className="omnichannel-customer">
      {/* Profile Section */}
      <div className="customer-profile">
        <div className="customer-avatar">SJ</div>
        <p className="customer-name">Sarah Johnson</p>
        <div className="customer-tags">
          <span className="tag active">Active</span>
          <span className="tag vip">VIP</span>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <p className="customer-section-title">CONTACT INFORMATION</p>
        <div className="customer-info-item">
          <span className="customer-info-label">Email:</span>
          <span>sarah.j@email.com</span>
        </div>
        <div className="customer-info-item">
          <span className="customer-info-label">Phone:</span>
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="customer-info-item">
          <span className="customer-info-label">Location:</span>
          <span>New York, USA</span>
        </div>
      </div>

      {/* Customer Stats */}
      <div>
        <p className="customer-section-title">CUSTOMER STATS</p>
        <div className="customer-stats">
          <div className="customer-stat">
            <p className="customer-stat-label">Total Orders</p>
            <p className="customer-stat-value">24</p>
          </div>
          <div className="customer-stat">
            <p className="customer-stat-label">Total Spent</p>
            <p className="customer-stat-value">$3,450</p>
          </div>
          <div className="customer-stat">
            <p className="customer-stat-label">Member Since</p>
            <p className="customer-stat-value">Jan 2023</p>
          </div>
          <div className="customer-stat">
            <p className="customer-stat-label">Satisfaction</p>
            <p className="customer-stat-value">98%</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <p className="customer-section-title">RECENT ORDERS</p>
        <div className="recent-orders">
          {recentOrders.map((order) => (
            <div key={order.id} className="order-item">
              <p className="order-id">{order.id}</p>
              <p className="order-product">{order.product}</p>
              <div className="order-footer">
                <span className="order-price">{order.price}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-buttons">
        <button type="button" className="quick-action-primary">
          View Full Profile
        </button>
        <button type="button" className="quick-action-secondary">
          Order History
        </button>
        <button type="button" className="quick-action-secondary">
          Add Note
        </button>
      </div>
    </div>
  )
}

export default CustomerPanel
