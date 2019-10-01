import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Form } from "react-bootstrap";

import { WithContext as ReactTags } from "react-tag-input";

import "./add-link-form.styles.scss";

import FormGroup from "../form-group/form-group.component.jsx";

import {
  selectDurationVisibility,
  selectInputStatesValues
} from "../../redux/input/input.selectors.js";
import {
  toggleVisibility,
  updateInput
} from "../../redux/input/input.actions.js";
import {
  selectLinksItems,
  selectLinkActive
} from "../../redux/links/links.selectors.js";
import { addLinkItem, updateLinkItem } from "../../redux/links/links.utils.js";

const AddLinkForm = ({
  hidden,
  inputValues,
  toggleVisibility,
  updateInput,
  addLinkItem,
  linkData,
  updateLinkItem,
  linksItems,
  selectLinkActive
}) => {
  var buttonLabel = "Ajouter un lien";
  const { url, title, author, date, width, height, duration } = inputValues;
  const tags = inputValues.tags;
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  if (linkData) {
    buttonLabel = "Editer le lien";
  }

  const handleSubmit = event => {
    event.preventDefault();
    linkData
      ? updateLinkItem(linksItems, inputValues)
      : addLinkItem(linksItems, inputValues, selectLinkActive);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    const data = {};
    // On form le state de la valeurs des différents input
    for (let [key, stateInputValue] of Object.entries(inputValues)) {
      if (name === key) {
        data[key] = value;
      } else {
        data[key] = inputValues[key];
      }
    }
    // Mise a jours du state correspondant à la value de chaque input au onChange
    updateInput(data);
    // Affichage du champs duration en fonction de la catégory choisie
    if (name === "category") {
      var hiddenNewVal = value === "Video" ? false : true;
      toggleVisibility(hiddenNewVal);
    }
  };

  const handleDelete = i => {
    console.log(i);
    const tags = inputValues.tags;
    if(i === 0) {
      tags.splice(i, i+1)
    } else {
      tags.splice(i, i)
    }
    updateInput(inputValues);
  };

  const handleAddition = tag => {
    inputValues.tags.push(tag);
    updateInput(inputValues);
  };

  return (
    <form className="addLinkForm" onSubmit={handleSubmit}>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="url"
        value={url}
        label="URL"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="title"
        value={title}
        label="Title"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="author"
        value={author}
        label="Author"
        required
      ></FormGroup>
      <FormGroup
        type="date"
        handleChange={handleChange}
        name="date"
        value={date}
        label="Date"
        required
      ></FormGroup>
      <Form.Label>Keywords</Form.Label>
      <ReactTags
        tags={tags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
      />
      <FormGroup
        type="section"
        handleChange={handleChange}
        options={["Photo", "Video"]}
        name="category"
        label="Category"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="width"
        value={width}
        label="Width"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="height"
        value={height}
        label="Height"
        required
      ></FormGroup>
      {!hidden ? (
        <FormGroup
          type="time"
          handleChange={handleChange}
          name="duration"
          value={duration}
          label="Duration"
          required
        ></FormGroup>
      ) : null}
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  addLinkItem: (linksItems, link, pagination) =>
    dispatch(addLinkItem(linksItems, link, pagination)),
  updateInput: data => dispatch(updateInput(data)),
  updateLinkItem: (linksItems, inputValues) =>
    dispatch(updateLinkItem(linksItems, inputValues))
});

const mapStateToProps = state =>
  createStructuredSelector({
    hidden: selectDurationVisibility,
    inputValues: selectInputStatesValues,
    linksItems: selectLinksItems,
    active: selectLinkActive
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkForm);
