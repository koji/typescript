import React, { useState } from 'react';

interface person {
  firstName: string;
  lastName: string;
}

const FCObjectDisplay = () => {
  const [name, setName] = useState<person>({ firstName: '', lastName: '' });

  const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
    setName({ ...name, firstName: e.currentTarget.value });
  };
  const handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
    setName({ ...name, lastName: e.currentTarget.value });
  };
  return (
    <div>
      <h1>functional component with hooks</h1>
      <form>
        <input type="text" value={name.firstName} onChange={handleFirstName} placeholder="your first name" />
        <input type="text" value={name.lastName} onChange={handleLastName} placeholder="your last name" />
      </form>
      <h3>
        My Name: {name.firstName} {name.lastName}
      </h3>
    </div>
  );
};

export { FCObjectDisplay };
