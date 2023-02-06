
function Template({ user, Skeleton }) {
    return (
        <>
            <span className='id'>{user ? user.id : <Skeleton />}</span>
            <span className='name'>{user ? user.name : <Skeleton />}</span>
            <span className='username'>{user ? user.username : <Skeleton />}</span>
            <span className='email'>{user ? user.email : <Skeleton />}</span> 
        </>
    );
}
export default Template;