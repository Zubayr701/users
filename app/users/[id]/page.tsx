import Link from "next/link";

type Params = { params: { id: string } };

export default async function SingleUserPage({ params }: Params) {
  const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  const user = await res.json();

  return (
    <div>
      <h1>
        {user.name.firstname} {user.name.lastname}
      </h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Username: {user.username}</p>
      <br />    
      <Link href={`/users/${user.id}/details`}>
      <button className="bg-blue-600  font-semibold py-2 px-4 rounded-lg ">
       More
      </button>
      </Link>
    </div>
  );
}
