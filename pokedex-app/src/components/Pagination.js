
import React, {useEffect, useState} from 'react';
import "./style.css";
const Pagination = ({data, setPage}) =>{
	const [currentPage, setcurrentPage] = useState(1);
	const [itemsPerPage, setitemsPerPage] = useState(4);

	const [pageNumberLimit, setpageNumberLimit] = useState(10);
	const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
	const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


	useEffect(() => {}, [])
	const pages = []
	for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
		pages.push(i);
	}

	const handleClick = (event) => {
		setcurrentPage(Number(event.target.id));
		setPage(Number(event.target.id))
		setitemsPerPage(4)
		setpageNumberLimit(10)
	};

	const renderPageNumbers = pages.map((number)=>{
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					key={number}
					id={number}
					onClick={handleClick}
					className={currentPage === number ? "active" : null}
				>
					{number}
				</li>
			);
		} else {
			return null;
		}
	})

	const handleNextbtn = () => {
		setcurrentPage(currentPage + 1);
		setPage(currentPage + 1)

		if (currentPage + 1 > maxPageNumberLimit) {
			setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	const handlePrevbtn = () => {
		setcurrentPage(currentPage - 1);
		setPage(currentPage - 1)

		if ((currentPage - 1) % pageNumberLimit === 0) {
			setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	let pageIncrementBtn = null;
	if (pages.length > maxPageNumberLimit) {
		pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
	}

	let pageDecrementBtn = null;
	if (minPageNumberLimit >= 1) {
		pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
	}

	return(
		<div className='page-container'>
			<ul className="pageNumbers">
				<li>
					<button className='prev'
						onClick={handlePrevbtn}
						disabled={currentPage === pages[0]}>
						Prev
					</button>
				</li>
				{pageDecrementBtn}
				{renderPageNumbers}
				{pageIncrementBtn}

				<li>
					<button className='next'
						onClick={handleNextbtn}
						disabled={currentPage === pages[pages.length - 1]}>
						Next
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Pagination