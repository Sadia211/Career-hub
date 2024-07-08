
/*get jobs if there are jobs*/
const getStoredJobApplication =()=>{
 const storedJobApplication = localStorage.getItem('job-applications')
 if(storedJobApplication){
    return JSON.parse(storedJobApplication);
 }
return [];
}





/*for saving the job application,and id given for saving the jobs*/
const saveJobApplication = id =>{
    const storedJobApplications=getStoredJobApplication();
    const exists =storedJobApplications.find(jobId=>jobId===id);/*check if the job was already applied, if not exists then,*/
   if(!exists){
    storedJobApplications.push(id);
    localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
   } 

}

export {saveJobApplication}
export{getStoredJobApplication}