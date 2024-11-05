import { useState, useEffect, useRef } from "react";
import "./Content.scss";
import Generated from "../mockData/Generated.json";
import { Link } from "react-router-dom";
import { User } from "../mockData/type.tsx";

interface ContentProps {
  children: React.ReactNode;
  filteredUsers: User[];
}

const cards = [
  { id: 1, imgSrc: "/use2.png", smallP: "users", bigP: 0 },
  { id: 2, imgSrc: "/use1.png", smallP: "Active users", bigP: 0 },
  { id: 3, imgSrc: "/use3.png", smallP: "Users with loans", bigP: "0" },
  { id: 4, imgSrc: "/use4.png", smallP: "Users with savings", bigP: "0" },
];

const headers = [
  { id: 1, title: "Organisation", img: "/filter-results-button.png" },
  { id: 2, title: "Username", img: "/filter-results-button.png" },
  { id: 3, title: "Email", img: "/filter-results-button.png" },
  { id: 4, title: "Phone number", img: "/filter-results-button.png" },
  { id: 5, title: "Date Joined", img: "/filter-results-button.png" },
  { id: 6, title: "Status", img: "/filter-results-button.png" },
];

const ENTRIES_PER_PAGE = 10;

const Content: React.FC<ContentProps> = ({ children, filteredUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisibility, setModalVisibility] = useState<{
    [key: number]: boolean;
  }>({});
  const modalRef = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const usersToDisplay =
    filteredUsers.length > 0 ? filteredUsers : (Generated as User[]);
  const totalEntries = usersToDisplay.length;
  const totalPages = Math.ceil(totalEntries / ENTRIES_PER_PAGE);

  const indexOfLastEntry = currentPage * ENTRIES_PER_PAGE;
  const indexOfFirstEntry = indexOfLastEntry - ENTRIES_PER_PAGE;
  const currentEntries = usersToDisplay.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Calculate totals
  const totalUsers = Generated.length; // Total users
  const activeUsers = Generated.filter(
    (user) => user.status.toLowerCase() === "active"
  ).length; // Active users

  // Updating cards with calculated values
  const updatedCards = cards.map((card) => {
    if (card.smallP === "users") {
      return { ...card, bigP: totalUsers };
    } else if (card.smallP === "Active users") {
      return { ...card, bigP: activeUsers };
    }
    // Add additional conditions for loans and savings if you have those details
    return card;
  });

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const toggleModal = (id: number) => {
    setModalVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isClickInside = Object.values(modalRef.current).some(
      (ref) => ref && ref.contains(event.target as Node)
    );
    if (!isClickInside) {
      setModalVisibility({});
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const saveUserToLocalStorage = (user: User) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
  };

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active-page" : ""}>
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={1 === currentPage ? "active-page" : ""}>
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(<span key="left-ellipsis">...</span>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active-page" : ""}>
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(<span key="right-ellipsis">...</span>);
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={totalPages === currentPage ? "active-page" : ""}>
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="content-body">
      <div className="container">
        {children}

        <p className="user-p">User</p>

        <div className="card-group">
          {updatedCards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imgSrc} alt="" />
              <p className="cd-p-s">{card.smallP}</p>
              <p className="cd-p-b">{card.bigP}</p>
            </div>
          ))}
        </div>

        <div className="entries-count">
          <p className="pshow">
            Showing{" "}
            <span className="spanshow">
              {Math.min(indexOfLastEntry, totalEntries)}{" "}
            </span>{" "}
            out of {totalEntries}
          </p>
        </div>

        <div className="mock-body">
          <div className="flex-table t-top">
            {headers.map((header) => (
              <p key={header.id} className="p-fl">
                {header.title} <img src={header.img} alt="" />
              </p>
            ))}
          </div>

          {currentEntries.map((user) => (
            <div key={user.id} className="moc-di">
              <div className="flex-table t-none">
                <p className="p-fl">Organisation:</p>
                <p className="p-fl">Username:</p>
                <p className="p-fl">Email:</p>
                <p className="p-fl">Phone number:</p>
                <p className="p-fl">Date Joined:</p>
                <p className="p-fl">Status:</p>
              </div>

              <div className="flex-table two">
                <p className="p-f2">{user.organisation}</p>
                <p className="p-f2">{user.username}</p>
                <p className="p-f2">{user.email}</p>
                <p className="p-f2">{user.phone}</p>
                <p className="p-f2">{user.dateJoined}</p>
                <p className="p-f2">
                  <span className={user.status.toLowerCase()}>
                    {user.status}
                  </span>
                </p>
                <img
                  className="imgflick"
                  src={user.imgClick}
                  alt=""
                  onClick={() => toggleModal(user.id)}
                />

                {modalVisibility[user.id] && (
                  <div
                    className="ab-modal"
                    ref={(el) => (modalRef.current[user.id] = el)}>
                    <p>
                      <Link
                        to={`/userdetail/${user.id}`}
                        className="view_detail"
                        onClick={() => saveUserToLocalStorage(user)}>
                        <img src="/view-eye.png" alt="" />
                        View Details
                      </Link>
                    </p>
                    <p>
                      <img src="/np_delete-friend.png" alt="" />
                      Blacklist User
                    </p>
                    <p>
                      <img src="/np_user_2995993_000000 1.png" alt="" />
                      Activate User
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="down-flex">
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
              <img src="/leftVector.png" alt="" />
            </button>

            {renderPageNumbers()}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
              <img src="/np_next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
