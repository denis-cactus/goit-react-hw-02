import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thTitle}>Type</th>
          <th className={styles.thTitle}>Amount</th>
          <th className={styles.thTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.td}>{item.type}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
