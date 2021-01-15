import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiBulb } from "react-icons/bi";
import { CgTag } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

import { fetchLabels } from "../../redux/actions/labelAction";
import { changeTab } from "../../redux/actions/tabAction";

import { SidebarContainer, Menu, MenuItem, Label, Icon } from "./style";

const Sidebar = ({ setModal }) => {
  const dispatch = useDispatch();
  const { labels } = useSelector((state) => state.label);
  const { active } = useSelector((state) => state.tab);

  useEffect(() => {
    dispatch(fetchLabels());
    dispatch(changeTab("Notes"));
  }, [dispatch]);

  const handleTabChange = (tabClicked) => {
    dispatch(changeTab(tabClicked));
  };

  return (
    <SidebarContainer>
      <Menu>
        <MenuItem
          active={active === "Notes"}
          onClick={() => handleTabChange("Notes")}
        >
          <Icon active={active === "Notes"}>
            <BiBulb />
          </Icon>
          <Label>Notes</Label>
        </MenuItem>
        {labels &&
          labels.map((label) => {
            return (
              <MenuItem
                key={label._id}
                active={active === label.title}
                onClick={() => handleTabChange(label.title)}
              >
                <Icon active={active === label.title}>
                  <CgTag />
                </Icon>
                <Label key={label._id}>{label.title}</Label>
              </MenuItem>
            );
          })}
        <MenuItem onClick={() => setModal(true)}>
          <Icon>
            <FiEdit2 />
          </Icon>
          <Label>Add/Edit Labels</Label>
        </MenuItem>
        {/* <MenuItem>
          <Icon>
            <IoTrashOutline />
          </Icon>
          <Label>Trash</Label>
        </MenuItem> */}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
