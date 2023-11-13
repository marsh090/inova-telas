import { useEffect, useState } from 'react';
import Card from './Card'; // Import the Card component
import styles from './page.module.css';

// Define the structure of your group data
interface Group {
  id: number;
  name: string;
  members: string;
}

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    // Fetch groups from your API
    // Replace 'your-api-endpoint' with your actual API endpoint
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setGroups(data));
  }, []);

  return (
    <div className={styles.fullscreen}>
      <header>
        <h1 className={styles.title}>Inovaweek</h1>
      </header>
      <div className={styles.center}>
        <div className={styles.list}>
          {groups.map(group => (
            <Card 
              key={group.id} 
              title={`Grupo ${group.id}: ${group.name}`} 
              members={`Integrantes: ${group.members}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
