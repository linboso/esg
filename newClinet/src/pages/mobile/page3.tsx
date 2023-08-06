import { useNavigate, Link } from "react-router-dom"
import { Grid, Paper, Box, Typography } from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import SelectList from "../../features/SelectList/SelectList"
import { updateGoHome, updateGoSchool } from "../../slice/womSlice"
import { postData } from "../../api/index"
import { useMutation } from "react-query"
import { styled } from "styled-components"

const TextButton = styled.div`
  display: flex;
  width: 186px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0.15px solid #000;
  background: #fff;
  &:hover {
    cursor: pointer;
  }
`

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 51px;
//   flex: 1 0 0;
//   align-self: stretch;
// `

const Container = styled.div``

function Page3() {
  const state = useAppSelector((state) => state.wayOfMoving.record)
  const { Userinfo } = useAppSelector((state) => state.InfoSlice)
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const mutation = useMutation(async (payload: unknown) => {
    await postData(payload)
  })

  const next = () => {
    dispatch(updateGoHome(["rain", state.sunny.goHome]))
    dispatch(updateGoSchool(["rain", state.sunny.goSchool]))
    // console.log(state);

    const payloadHome = state.sunny.goHome
    const payloadSchool = state.sunny.goSchool

    // pre two are sunny case, and past two are rain case
    // @TODO - should have a erorr handling for axios call error
    mutation.mutate({
      info: Userinfo,
      data: {
        sunnyHome: payloadHome,
        sunnySchool: payloadSchool,
        rainHome: payloadHome,
        rainSchool: payloadSchool,
      },
    })

    navigate("/mobile-page4")
  }

  const goback = () => {
    navigate("/mobile-page5")
  }

  return (
    <Container>
      <Box
        sx={{
          // backgroundColor: "#d9e09a",
          padding: 3,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            // width: 1100,
            // height: 520,
            // backgroundColor: "#F5F5F5",
            width: "150%",
            height: "621px",
            backgroundColor: "#F5F5F5",
            borderRadius: "30px",
            display: "flex",
          }}
        >
          <Grid
            container
            direction="column"
            gap={3}
            justifyItems="center"
            alignItems="center"
          >
            <Grid
              item
              container
              sx={{
                // backgroundColor: "#895134",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // backgroundColor: "#865497",
                  paddingTop: 15,
                  alignSelf: "center",
                }}
              >
                <Typography
                  fontSize={12}
                  fontWeight="bold"
                  align="center"
                  width="223px"
                >
                  {" "}
                  If it rains, will you change commuting method?{" "}
                </Typography>
              </Box>
            </Grid>

            {/* <Card
              sx={{
                width: "186px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardActionArea onClick={goback}>
                <Typography
                  variant="h5"
                  sx={{
                    height: 65,
                    paddingTop: 4,
                    textAlign: "center",
                  }}
                >
                  Yes
                </Typography>
              </CardActionArea>
            </Card> */}
            <TextButton onClick={goback}>Yes</TextButton>

            {/* <Card
              sx={{
                width: "186px",
              }}
            >
              <CardActionArea onClick={next}>
                <Typography
                  variant="h5"
                  sx={{
                    height: 65,
                    paddingTop: 4,
                    textAlign: "center",
                  }}
                >
                  No
                </Typography>
              </CardActionArea>
            </Card> */}
            <TextButton onClick={next}>No</TextButton>

            {/* <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "#513497"
              }}
            >
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#505050",
                  borderRadius: 5,
                  width: 50,
                  height: 30,
                  marginTop: 164,
                  marginRight: 16,
                  alignSelf: "flex-end",
                  transform: "rotate(180deg)",
                }}
              >
                <IconButton
                  size="large"
                  sx={{ width: 50, height: 30 }}
                  onClick={back}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </Grid> */}
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

export default Page3
