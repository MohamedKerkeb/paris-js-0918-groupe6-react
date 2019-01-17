import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { loadavg } from "os";
import { SMALL } from "./studentConstant";
import StudentProfilView from "./StudentProfilView";
import StudentView from "./StudentView";

class StudentApplication extends Component {
  state = {
    open: false,
    openMessageSelect: false,
    openMessageRefuse: false,
    title: ``,
    content: ``,
    button: ``
  };

  clickStudentSmall = () => {
    console.log("open");
    this.setState({ open: true });
  };

  clickClose = () => {
    this.setState({ open: false });
  };

  selectStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    axios
      .put(`http://localhost:3001/application`, {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        console.log(response);
        this.setState({
          openMessageSelect: true,
          title: `Trainee added`,
          content: `L'étudiant ${firstname} a bien été pré-sélectionné pour la mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  refuseStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    console.log("onclick", missionId, traineeId, mode);
    axios
      .put(`http://localhost:3001/application`, {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        console.log(response);
        this.setState({
          openMessageRefuse: true,
          title: `Trainee deleted`,
          content: `L'étudiant(e) ${firstname} a bien été refusé pour cette mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  handleClose = () => {
    const { handleCloseRefresh, traineeId, missionId } = this.props;
    handleCloseRefresh(traineeId, missionId);
    this.setState({ openMessageSelect: false, openMessageRefuse: false });
  };

  render() {
    console.log(this.props.descriptionTrainee);
    const {
      open,
      openMessageSelect,
      openMessageRefuse,
      title,
      button,
      content
    } = this.state;
    const { mode, modeSelect, modeRefuse, disabled, isFull } = this.props;
    console.log("isFull :", isFull);

    switch (mode) {
      case "APPLICATION": {
        return (
          <div>
            <div>
              <div onClick={this.clickStudentSmall}>
                <StudentView {...this.props} size={SMALL} open={open} />
              </div>
              {isFull ? (
                <Button variant="contained" disabled>
                  Ajouter
                </Button>
              ) : (
                <Button
                  onClick={() => this.selectStudent(modeSelect)}
                  variant="contained"
                  color="primary"
                >
                  Ajouter
                </Button>
              )}
              <Button
                onClick={() => this.refuseStudent(modeRefuse)}
                variant="contained"
                color="secondary"
              >
                Refuser
              </Button>
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG AJOUT OK ************************** */}
            <Dialog
              open={openMessageSelect}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
      case "SELECT": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView {...this.props} size={SMALL} />
              </div>
              {disabled ? (
                <Button disabled variant="contained" color="secondary">
                  Refuser
                </Button>
              ) : (
                <Button
                  onClick={() => this.refuseStudent(modeRefuse)}
                  variant="contained"
                  color="secondary"
                >
                  Refuser
                </Button>
              )}
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
      case "ADMIN": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView {...this.props} size={SMALL} />
              </div>
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
          </div>
        );
      }
      default:
        break;
    }
  }
}

export default StudentApplication;
