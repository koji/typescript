import React, { useState } from 'react';
import { useFetchJobs } from './components/useFetchJobs';
import { Container } from 'react-bootstrap';
import { Job } from './components/Job';
import { JobData } from './Types';
import { JobsPagination } from './components/JobsPagination';
import { SearchForm } from './components/SearchForm';


// ToDo job id:string 
const App = () => {
  const [ params, setParams ] = useState({});
  const [ page, setPage] = useState<number>(1);
  const  { jobs, loading, error, hasNextPage} = useFetchJobs(params, page);
  // console.log('jobs', jobs);
  // console.log('error', error);

  const handleParamChange = (e: any) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  };


  return (
    <Container className="my-4">
      <h1 className="mb-4">Jobs on GitHub</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map((job: JobData) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
