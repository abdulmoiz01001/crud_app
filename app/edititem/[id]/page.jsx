
import EditItem from '@/components/EditItem';

const getOneTopic = async ()=>{
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:'no-store',
    });

    if(!res.ok){
      throw new Error("Data Fetching Error");
    }
    return res.json();
  } catch (error) { 
    console.log(error);
  }
};

export default async function EditItemTopic({params}){
  const {id} = params;
  const {topic} = await getOneTopic();
  const { title , description } = topic;
  return <EditItem id={id} title={title} description={description} />
}