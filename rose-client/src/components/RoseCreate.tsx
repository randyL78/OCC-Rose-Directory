import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Step, StepButton, Stepper,
  Typography
} from "@mui/material";
import {Link as RouterLink, useFetcher, useLoaderData, useSubmit} from "react-router-dom";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {RoseResponse} from "../interfaces/Response.ts";
import {ChangeEvent, useState} from "react";
import {RoseCreateFirstStep} from "./RoseCreateFirstStep.tsx";
import {RoseCreateThirdStep} from "./RoseCreateThirdStep.tsx";
import {RoseCreateSecondStep} from "./RoseCreateSecondStep.tsx";

const steps = ['Basic Info', 'Indicators', 'Description']

export default function RoseCreate() {
  const fetcher = useFetcher()
  const { rose } = (useLoaderData() as RoseResponse).data as { rose: AdminRoseDetailItem }
  const [roseData, setRoseData] = useState<AdminRoseDetailItem>(rose)
  const [activeStep, setActiveStep] = useState<number>(0)
  const submit = useSubmit()

  const handleStep = (index: number) => {
    setActiveStep(index)
  }

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoseData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = () => {
    submit({ ...roseData }, { method: 'post' })
  }

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h5" component="p" pl={2} color="textPrimary">
          { rose.name ?  `Edit ${rose.name}` : 'Add A New Rose' }
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stepper nonLinear activeStep={activeStep} sx={{mt: 3, mb: 3}}>
          {
            steps.map((label, index) => (
              <Step key={label}>
                <StepButton color='inherit' onClick={() => handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))
          }
        </Stepper>
        <fetcher.Form onSubmit={handleSubmit}>
          <Box display='flex' justifyContent='space-between' flexDirection='column' sx={{ minHeight: '45vh'}}>
            <Box>
              { activeStep === 0 && <RoseCreateFirstStep rose={roseData} handleFieldChange={handleFieldChange} /> }
              { activeStep === 1 && <RoseCreateSecondStep rose={roseData} handleFieldChange={handleFieldChange} setRose={setRoseData} />}
              { activeStep === 2 && <RoseCreateThirdStep rose={roseData} handleFieldChange={handleFieldChange} /> }
            </Box>
            <Box display="flex" justifyContent="space-between" p={2}>
              <Button
                component={RouterLink}
                to='/admin/roses'
                color="secondary"
                sx={{ mr: 2 }}
                variant="outlined">
                Cancel
              </Button>
              <Box display="flex" justifyContent="flex-end">

                { activeStep > 0 && (<Button
                  sx={{ mr: 2 }}
                  color="primary"
                  onClick={() => handleStep(activeStep - 1)}
                  variant='outlined'
                >
                  Prev Section
                </Button>)
                }
                { activeStep < steps.length - 1 && (<Button
                  color="primary"
                  onClick={() => handleStep(activeStep + 1)}
                  variant='contained'
                >
                  Next Section
                </Button>)
                }
                { activeStep === steps.length - 1 && (
                  <Button
                    color="primary"
                    type='submit'
                    variant='contained'
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  )
}
