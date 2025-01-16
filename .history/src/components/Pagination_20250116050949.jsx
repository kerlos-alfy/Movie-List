/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
function PaginationComponent({ pageCount, getPage }) {
	const handlePageClick = (data) => {
		getPage(data.selected + 1);
	};
	return (
		<ReactPaginate
			breakLabel="..."
			//nextLabel="التالى"
			previousLabel="السابق"
			onPageChange={handlePageClick}
			marginPagesDisplayed={2}
			pageRangeDisplayed={2}
			pageCount={pageCount}
			//previousLabel="السابق"
			nextLabel="التالى"
			containerClassName={"pagination justify-content-center p-3"}
			pageClassName={"page-item"}
			pageLinkClassName={"page-link"}
			previousClassName={"page-item"}
			nextClassName={"page-item"}
			previousLinkClassName={"page-link"}
			nextLinkClassName={"page-link"}
			breakClassName={"page-item"}
			breakLinkClassName={"page-link"}
			activeClassName={"active"}
		/>
	);
}

export default PaginationComponent;
