import { Avatar,  Container,  Divider,  Group,  Table,  } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncGetLeaderboards } from "../redux/states/leaderboards/action";

export default function LeaderBoardPage () {
  const dispatch = useDispatch();
  const { leaderboards } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, []);


      const rows = leaderboards.map((element,index) => (
        <Table.Tr key={index}>
          <Table.Td>{index+1}</Table.Td>
          <Table.Td><Group><Avatar  name={element.user.name} color="initials" />{element.user.name}</Group></Table.Td>
          <Table.Td>{element.score}</Table.Td>
        </Table.Tr>
      ));

  return (
   <Container>
    <h1 className="text-2xl font-extrabold ">Leaderboards</h1>
    <Divider style={{marginBottom:'20px'}} my="md" />
     <Table>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>No</Table.Th>
        <Table.Th>10 Top Users</Table.Th>
        <Table.Th>Score</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>{rows}</Table.Tbody>
  </Table>
   </Container>
  );
};


