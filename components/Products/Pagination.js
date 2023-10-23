import { useRouter } from 'next/router';
import Link from 'next/link'

const Pagination = ({totalPages}) => {
    const router = useRouter();
    let pageNum = router.query.page

    const pager = () => {
        const paginate = []

        for(let i = 1; i <= totalPages; i++){
            paginate.push(
                <Link href={`?page=${i}`} key={i}>
                    <a 
                        className={`page-numbers ${(parseInt(pageNum) === i) ? 'current' : null}`}
                    >
                        {i}
                    </a>
                </Link>
            )
        }

        return paginate
    }
    return(
        <div className="col-lg-12 col-md-12">
            <div className="pagination-area text-center">
                <Link href={(totalPages === parseInt(pageNum)) ? `?page=${parseInt(pageNum) - 1}` : `?page=${pageNum}`}>
                    <a className="prev page-numbers">
                        <i className='bx bx-chevrons-left'></i>
                    </a>
                </Link>
                {pager()}
                <Link href={(totalPages === parseInt(pageNum)) ? `?page=${pageNum}` : `?page=${parseInt(pageNum) + 1}`}>
                    <a className="next page-numbers">
                        <i className='bx bx-chevrons-right'></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Pagination