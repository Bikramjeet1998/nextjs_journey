export default function Card({ title, description }) {
    return (
        
            <div style={{
              border: '1px solid #ddd', 
              padding: '20px', 
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          )
    
}