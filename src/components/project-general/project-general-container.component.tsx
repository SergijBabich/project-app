import React, {useEffect} from "react"
import {connect} from   "react-redux"
import ProjectsList from "./projects-list"
import {getUsersProjects, editUserProject, removeUsersProject, setInitialValue, setEditMode} from "../../redux/project-reducer"
import { Redirect } from "react-router-dom" 
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import p from "./project-general.module.css"
import PropTypes from "prop-types" 
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"


interface ProjectsList {
  _id: string,
  title:string,
  description: string,
  token: string
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: "33.33%",
			flexShrink: 0,
		},
		secondaryHeading: {
			fontSize: theme.typography.pxToRem(15),
			color: theme.palette.text.secondary,
		},
		MuiButtonBaseroot: {
			width: "109px",
			height: "6px",
		}
	}),
)

const ProjectGeneral = (props:any) => {

	useEffect(() => {
		props.getUsersProjects(props.token)
	}, []) 

	const classes = useStyles()
	const [expanded, setExpanded] = React.useState<string | false>(false)

	const handleChange = (panel: string) => (event: React.ChangeEvent<any>, isExpanded: string | boolean) => {
		setExpanded(isExpanded ? panel : false)      
	}

	if(!props.token) {
		return <Redirect to={"/login"} />
	}

	return (
		<div className={p.projects}>
			{ props.projectsList.map( (el:ProjectsList , index:number) => {
				return (
					<div key={index}>
						{el.title}
						<Accordion expanded={expanded === index} onChange={handleChange(index)}>
							<AccordionSummary
								aria-controls="panel1bh-content"
								id="panel1bh-header"
								className={classes.MuiButtonBaseroot}
							>
								<button  className={p.button}  onClick={() => {props.setEditMode(false)}}>Expander</button>
							</AccordionSummary>
							<AccordionDetails>
								<ProjectsList initialValue={props.initialValue} 
									editFlag={props.editFlag} 
									setInitialValue = {props.setInitialValue}
									setEditMode={props.setEditMode}
									key={index} 
									removeUsersProject={props.removeUsersProject} 
									getUsersProjects={props.getUsersProjects}
									token={props.token}
									editUserProject={props.editUserProject}  
									projectsList ={el} />
							</AccordionDetails>
						</Accordion>
					</div>
				)
			})}
		</div>
  
	)
}

ProjectGeneral.propTypes = {  
	token: PropTypes.string,
	projectsList: PropTypes.array,
	status: PropTypes.string,
	getUsersProjects: PropTypes.func,
	editUserProject: PropTypes.func,
	removeUsersProject: PropTypes.func
}

const mapStateToProps = (state: any) => {
	return {
		token: state.login.token,
		projectsList: state.projects.projectsList,
		status: state.projects.status,
		initialValue: state.projects.initialValue,
		editFlag: state.projects.editFlag
	}

}


const ProjectGeneralContainer = connect(mapStateToProps, {getUsersProjects, editUserProject, removeUsersProject, setInitialValue, setEditMode} )(ProjectGeneral)
export default ProjectGeneralContainer