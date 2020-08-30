import React, {useEffect, useState, useMemo} from 'react';
import { Redirect } from 'react-router-dom' ;
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types' ;
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {getUsersProjects, editUserProject, removeUsersProject,projectSearching, setInitialValue, setEditMode} from '../../redux/ProjectReducer';
import ProjectsList from '../ProjectsList';
import './ProjectContainer.css';
import {ProjectsData, ProjectPageProps} from './ProjectContainer-models';

const useStylesInputSearch = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    MuiButtonBaseroot: {
      width: '109px',
      height: '6px',
    }
  }),
);

const ProjectsPage: React.FunctionComponent<ProjectPageProps>=(props: ProjectPageProps) => {

  useEffect(() => {
    props.getUsersProjects(props.token);
  }, []);
   
  const classes = useStyles();
  const classesInputSearch = useStylesInputSearch();

  const [projects,setProjects] = useState(props.projectsList);
  const [expanded, setExpanded] = useState(false);

  const showProjectDescription = (panel: boolean) => {
    const setActiveExpand = (isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);      
    };
    setActiveExpand(panel);
  };

  const handleExpandChange = (panel: boolean) => (isExpanded: boolean): void => {
    setExpanded(isExpanded? panel : false);      
  };
  
  const handleInputChange = (event: { target: { value: string }}) => {
    props.projectSearching(event.target.value.trim());
  };

  const expandedSearchingCard = () => {
    const filteredProjects = props.projectsList.filter((project: ProjectsData): Array<ProjectsData> => {
      if(project.description.toLocaleLowerCase().includes(props.searchingValue) || project.title.toLocaleLowerCase().includes(props.searchingValue)) {
        return project;
      }
    });

    setProjects(filteredProjects);

    if(!props.searchingValue) {
      return showProjectDescription(false);
    }

    for(const i of filteredProjects) {
      if (i.description.toLocaleLowerCase().includes(props.searchingValue.toLocaleLowerCase())) {
        return showProjectDescription(i._id);
      }
    }
  };

  useMemo(() => {
    expandedSearchingCard();
  }, [props.projectsList, props.searchingValue]);

  if(!props.token) {
    return <Redirect to={'/login'} />;
  }

  const markTitlesLetters = (string: string, pos: number, len: number): JSX.Element => {
    return (
      <>
        {string.slice(0, pos)}<mark>{string.slice(pos, pos + len)}</mark>{string.slice(pos + len)}
      </>
    );
  };

  return (
    <div className='projects'>
      <form className={classesInputSearch.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" value={props.searchingValue} variant="outlined" onChange={handleInputChange}/>
      </form>
      {projects.map( (el: ProjectsData , index: number) => {
        return (
          <div key={el._id}>
            <div>{console.log(projects[index].title)}
              <p>{markTitlesLetters(el.title, projects[index].title.search(props.searchingValue), props.searchingValue.length)}</p>
            </div>
            <Accordion expanded={expanded === el._id} onChange={handleExpandChange(el._id)}>
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.MuiButtonBaseroot}
              >
                <button className='button' onClick={() => {props.setEditMode(false);}}>{props.t('project.expander')}</button>
              </AccordionSummary>
              <AccordionDetails>
                <ProjectsList initialValue={props.initialValue} 
                  editFlag={props.editFlag} 
                  setInitialValue={props.setInitialValue}
                  setEditMode={props.setEditMode}
                  key={index} 
                  removeUsersProject={props.removeUsersProject} 
                  getUsersProjects={props.getUsersProjects}
                  token={props.token}
                  editUserProject={props.editUserProject}  
                  projectsList={el}
                  t={props.t}
                  markTitlesLetters={markTitlesLetters}
                  searchingValue={props.searchingValue} />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>  
  );
};

ProjectsPage.propTypes = {  
  token: PropTypes.string,
  projectsList: PropTypes.array,
  editFlag: PropTypes.bool,
  initialValue: PropTypes.object,
  status: PropTypes.string,
  getUsersProjects: PropTypes.func,
  editUserProject: PropTypes.func,
  removeUsersProject: PropTypes.func,
  setInitialValue:PropTypes.func,
  setEditMode: PropTypes.func,
  projectSearching: PropTypes.func,
  searchingValue: PropTypes.string,
};

const mapStateToProps = (state: StateProps) => {
  return {
    token: state.login.token,
    projectsList: state.projects.projectsList,
    status: state.projects.status,
    initialValue: state.projects.initialValue,
    editFlag: state.projects.editFlag,
    searchingValue: state.projects.searchingValue,
    
  };
};

const ProjectContainer = connect(mapStateToProps, {getUsersProjects,projectSearching, editUserProject, removeUsersProject, setInitialValue, setEditMode} )(ProjectsPage);
export default ProjectContainer;