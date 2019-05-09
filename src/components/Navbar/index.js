import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
//import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "Roboto Mono"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  },
  moreLink: {
    padding: "0 24px",
    height: "32px",
    fontSize: "14px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12
  },
  list: {
    width: 250
  },
  drawerlink: {
    fontSize: "14px"
  }
};
class Navbar extends React.Component {
  state = {
    more: null,
    info: null,
    domain: null,
    school: null,
    group: null,
    local_library: null,
    drawer: false
  };
  handleClose = () => {
    this.setState({
      more: null,
      info: null,
      domain: null,
      school: null,
      group: null,
      local_library: null
    });
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    const { classes } = this.props;
    const { more, info, domain, school, group, local_library } = this.state;
    const sideLink = [
      {
        text: "Элсэлтийн вэб",
        link: "http://203.217.139.22/darkhan/loginesh.aspx"
      },
      { text: "Багшийн веб", link: "http://unimis.stda.edu.mn/teacher/" },
      { text: "Оюутны веб", link: "http://unimis.stda.edu.mn/student/" },
      { text: "Өөрийн үнэлгээний вэб", link: "http://sas.stda.edu.mn/" },
      { text: "Аттестатчиллын вэб", link: "http://unimis.stda.edu.mn/attest/" },
      {
        text: "Төгсөгчдийн мэдээлэл шүүх",
        link: "http://unimis.stda.edu.mn/search/"
      },
      { text: "Номын сангийн веб", link: "http://stda.edu.mn/library" },
      { text: "Moodle систем", link: "http://stda.edu.mn/moodle" },
      { text: "Дотоод файл сервэр", link: "http://192.168.10.105/owncloud" },
      { text: "Дотоод зааварчилгаа", link: "http://stda.edu.mn/guide/" },
      { text: "ШУТИС төв сайт", link: "http://must.edu.mn" },
      {
        text: "Эрдэм шинжилгээний веб",
        link: "http://www.unimis.edu.mn/buteel/"
      },
      { text: "ШУТ төв номын сан", link: "http://www.must-library.edu.mn/" },
      { text: "Оюутны холбоо", link: "http://oyutan.must.edu.mn/" }
    ];

    const sideList = (
      <div className={classes.list}>
        <List>
          {sideLink.map((data, index) => (
            <ListItem
              button
              key={index}
              onClick={() => (window.location.href = data.link)}
            >
              <ListItemText primary={data.text} className="drawer--link" />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className="dev-nav">
            <IconButton
              id="drawer"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer("drawer", true)}
            >
              <MenuIcon />
            </IconButton>
            <div className="nav--link">
              <a href="/" className={classes.link}>
                <span className={classes.grow}>Програм Хангамж</span>
              </a>
            </div>
            <div className="nav--button">
              {/* Танилцуулга */}
              <Tooltip title="Танилцуулга" placement="bottom">
                <IconButton
                  className={classes.button}
                  aria-owns={info ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ info: event.currentTarget })
                  }
                >
                  <i className="material-icons">info</i>
                </IconButton>
              </Tooltip>
              {/* Салбар */}
              <Tooltip title="Салбар" placement="bottom">
                <IconButton
                  aria-owns={more ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ domain: event.currentTarget })
                  }
                >
                  <i className="material-icons">domain</i>
                </IconButton>
              </Tooltip>
              {/* Сургалт */}
              <Tooltip title="Сургалт" placement="bottom">
                <IconButton
                  aria-owns={more ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ school: event.currentTarget })
                  }
                >
                  <i className="material-icons">school</i>
                </IconButton>
              </Tooltip>
              {/* Оюутан */}
              <Tooltip title="Оюутан" placement="bottom">
                <IconButton
                  aria-owns={more ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ group: event.currentTarget })
                  }
                >
                  <i className="material-icons">group</i>
                </IconButton>
              </Tooltip>
              {/* Эрдэм шинжилгээ */}
              <Tooltip title="Эрдэм шинжилгээ" placement="bottom">
                <IconButton
                  aria-owns={more ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ local_library: event.currentTarget })
                  }
                >
                  <i className="material-icons">local_library</i>
                </IconButton>
              </Tooltip>
              {/* MORE */}
              <Tooltip title="Бусад" placement="bottom">
                <IconButton
                  aria-owns={more ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={event =>
                    this.setState({ more: event.currentTarget })
                  }
                >
                  <i className="material-icons">more_vert</i>
                </IconButton>
              </Tooltip>
            </div>
            {/* MENU */}
            <Menu
              anchorEl={info}
              open={Boolean(info)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=8")
                }
              >
                Захирлын мэндчилгээ
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=10")
                }
              >
                Түүхэн замнал
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=16")
                }
              >
                Бүтэц
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=12")
                }
              >
                Захирлын зөвлөл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=14")
                }
              >
                Багш хөгжлийн төв
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=2196")
                }
              >
                Ёс зүйн зөвлөл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=18")
                }
              >
                Санхүү үйлчилгээний алба
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={domain}
              open={Boolean(domain)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=20")
                }
              >
                Технологийн салбар
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=33")
                }
              >
                Инженерчлэлийн салбар
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=6488")
                }
              >
                Эрчим хүч мэдээллийн технологийн салбар
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=22")
                }
              >
                Суурь шинжлэх ухааны тэнхим
              </MenuItem>{" "}
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=1719")
                }
              >
                Лицей сургууль
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={school}
              open={Boolean(school)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=35")
                }
              >
                Сургалтын алба, номын сан
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=39")
                }
              >
                СУРГАЛТ ЯВУУЛЖ БУЙ МЭРГЭЖЛҮҮД
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=236")
                }
              >
                СУРГАЛТЫН ТӨЛБӨР ТООЦОО, ТӨЛӨХ АРГАЧИЛАЛ
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=234")
                }
              >
                Сургалтын тэтгэлэг зээл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=2516")
                }
              >
                Дээд боловсролын шинэчлэл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=7637")
                }
              >
                Чанарын удирдлагын тогтолцоо
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=6340")
                }
              >
                Нээлттэй хичээл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=41")
                }
              >
                Төгсөлт
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={group}
              open={Boolean(group)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=1261")
                }
              >
                Оюутны байр
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=55")
                }
              >
                Оюутны зөвлөл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=59")
                }
              >
                Оюутны клубууд
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=65")
                }
              >
                Төгсөгчдийн холбоо
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=57")
                }
              >
                Дүрэм журам
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=63")
                }
              >
                Онц төгсөгчид
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=61")
                }
              >
                Зургийн цомог
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={local_library}
              open={Boolean(local_library)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=67")
                }
              >
                Эрдмийн зөвлөл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=69")
                }
              >
                Манай эрдэмтэд
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=71")
                }
              >
                Ном сурах бичиг, арга зүйн зөвлөл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=73")
                }
              >
                Судалгааны төвүүд
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=75")
                }
              >
                ЭШХ эмхэтгэл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=1424")
                }
              >
                Профессорын семинар
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=77")
                }
              >
                Магистрын төгсөлтийн ажил
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=79")
                }
              >
                ЭШСА-ын чиглэл
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=4755")
                }
              >
                ЭШӨ бичих заавар
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={more}
              open={Boolean(more)}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=81")
                }
              >
                Хамтын ажиллагаа
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=37")
                }
              >
                Элсэлт
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href = "http://stda.edu.mn/stda/?page_id=86")
                }
              >
                Шилэн данс
              </MenuItem>
              <MenuItem
                className={classes.moreLink}
                onClick={() =>
                  (window.location.href =
                    "http://stda.edu.mn/stda/?page_id=110")
                }
              >
                Холбоо барих
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawer}
          onClose={this.toggleDrawer("drawer", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("drawer", false)}
            onKeyDown={this.toggleDrawer("drawer", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
