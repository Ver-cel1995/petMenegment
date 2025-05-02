import {Sidebar} from "./features/commponents/Sidebar/Sidebar.tsx";
import {FlexWrapper} from "./features/commponents/FlexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {MainApp} from "./features/commponents/MainApp/MainApp.tsx";
import {InfoPet} from "./features/commponents/InfoPet/InfoPet.tsx";
import {FavoritesPage} from "./features/commponents/FavoritesPage/FavoritesPage.tsx";
import {AddPet} from "./features/commponents/AddPet/AddPet.tsx";

function App() {
  return (
   <MainContainer>
       <FlexWrapper>
           <Sidebar/>
           <Main>
               <Routes>
                    <Route path={'/'} element={<MainApp/>}/>
                    <Route path={'pet/:id'} element={<InfoPet/>}/>
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/add" element={<AddPet />} />
               </Routes>
           </Main>
       </FlexWrapper>
   </MainContainer>
  )
}

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Main = styled.div`
    flex: 1;
    min-width: 0;
`;

export default App
