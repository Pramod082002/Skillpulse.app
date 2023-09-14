import { useEffect, useState } from "react";
import RankingList from "./RankingList";

import { Box, Typography, Modal } from "@mui/material";
import ComparisonTable from "./ComparisonTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 500,
};

const Rankings = ({ UserEmail }) => { 
  const [allUsers, setallUsers] = useState([]);
  const [userRank, setUserRank] = useState(0);

  //user1 is the one who is logged in
  const [user1, setUser1] = useState({});
  //user2 is the one who user1 wants to compare himself
  const [user2, setUser2] = useState({});

  //MODAL RELATED.
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = (email) => {
    setUser2(() => allUsers.find((u) => u.email === email));

    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  // finds the user that we need to compare in the allUsers
  //the opens the modal
  const findUserAndOpenModal = (email) => {
    handleOpen(email);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      // db call.
      // array of user objects.
      const data = {
        all_scores: {
          "test@gmail.com": {
            entryTest: {
              cn: {
                "Introduction and Physical layer": 96,
                "Data link layer and LAN": 89,
                "Network and Routing": 82,
                "Transport layer": 96,
                "Application layer": 0,
                totalMarks: 7.26,
              },
              dbms: {
                "Relational Databases": -1,
                "Database Design": -1,
                "Transactions and Concurrency": -1,
                "Data Storage and Querying": -1,
                "Advanced topics": -1,
                totalMarks: -1,
              },
              os: {
                "Operating System Overview": 14,
                "Process Management": 14,
                "Storage Management and File System": 51,
                "I/O Systems": 61,
                "Case Study": 71,
                totalMarks: 4,
              },
            },
            exitTest: {
              cn: {
                "Introduction and Physical layer": -1,
                "Data link layer and LAN": -1,
                "Network and Routing": -1,
                "Transport layer": -1,
                "Application layer": -1,
                totalMarks: -1,
              },
              dbms: {
                "Relational Databases": 16,
                "Database Design": 17,
                "Transactions and Concurrency": 61,
                "Data Storage and Querying": 51,
                "Advanced topics": 66,
                totalMarks: 4,
              },
              os: {
                "Operating System Overview": -1,
                "Process Management": -1,
                "Storage Management and File System": -1,
                "I/O Systems": -1,
                "Case Study": -1,
                totalMarks: -1,
              },
            },
          },
          "yogi@gmail.com": {
            entryTest: {
              cn: {
                "Introduction and Physical layer": -1,
                "Data link layer and LAN": -1,
                "Network and Routing": -1,
                "Transport layer": -1,
                "Application layer": -1,
                totalMarks: -1,
              },
              dbms: {
                "Relational Databases": 79,
                "Database Design": 76,
                "Transactions and Concurrency": 23,
                "Data Storage and Querying": 0,
                "Advanced topics": 0,
                totalMarks: 3.56,
              },
              os: {
                "Operating System Overview": 14,
                "Process Management": 14,
                "Storage Management and File System": 51,
                "I/O Systems": 61,
                "Case Study": 71,
                totalMarks: 4,
              },
            },
            exitTest: {
              cn: {
                "Introduction and Physical layer": -1,
                "Data link layer and LAN": -1,
                "Network and Routing": -1,
                "Transport layer": -1,
                "Application layer": -1,
                totalMarks: -1,
              },
              dbms: {
                "Relational Databases": 16,
                "Database Design": 17,
                "Transactions and Concurrency": 61,
                "Data Storage and Querying": 51,
                "Advanced topics": 66,
                totalMarks: 4,
              },
              os: {
                "Operating System Overview": -1,
                "Process Management": -1,
                "Storage Management and File System": -1,
                "I/O Systems": -1,
                "Case Study": -1,
                totalMarks: -1,
              },
            },
          },
        },
        score_board: {
          "test@gmail.com": 37.53333333333333,
          "yogi@gmail.com": 25.2,
        },
      };

      const scores = data?.all_scores;
      const score_board = data?.score_board;
      let users = [];
      for (let key in score_board) {
        let temp = {
          name: key,
          eis_score: score_board[key],
          email: key,
          m2: {
            entry_test: scores[key]["entryTest"],
            exit_test: scores[key]["exitTest"],
          },
        };

        users.push(temp);
      }

      // sort users based on EIS SCORE.
      users.sort((a, b) => b.eis_score - a.eis_score);

      //rank , name of the logged in user
      let rank = 0,
        user = "";
      //find the rank of the logged in user
      for (let i = 0; i < users.length; i++) {
        if (users[i].email !== UserEmail) continue;

        user = users[i];
        rank = i;
        break;
      }

      setUserRank(rank + 1);
      setUser1(user);
      setallUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ComparisonTable user1={user1} user2={user2} />
      </Modal>

      <div>
        <h1>Rankings</h1>
      </div>
      <div>
        <p>{`Your Rank : ${userRank} / ${allUsers.length}`}</p>
      </div>

      <RankingList
        allUsers={allUsers}
        Modalopener={findUserAndOpenModal}
        UserEmail={UserEmail}
      />
    </div>
  );
};

export default Rankings;
