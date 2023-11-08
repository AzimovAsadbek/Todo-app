import React, { useReducer, useState } from "react";
import {
  DateAdd,
  DateAdd__btn,
  DateAdd__input,
  Date__item,
  Main,
  MainDate,
  NotFound,
  Search,
  Search_btn,
  Search_input,
  Task_count,
  Title,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faFloppyDisk,
  faTrash,
  faPenToSquare,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import img from "./img/search.gif";

const mock = [
  { id: 1, name: "Html", status: false, isEdited: false },
  { id: 2, name: "JavaScript", status: false, isEdited: false },
  { id: 3, name: "React Js", status: false, isEdited: false },
  { id: 4, name: "React", status: false, isEdited: false },
];

const TodoApp = () => {
  const reduser = (state, action) => {
    switch (action.type) {
      // Check
      case "check": {
        return state.map((value) => {
          return value.id == action.payload
            ? { ...value, status: !value.status }
            : value;
        });
      }

      // Delete
      case "delite": {
        return state.filter((v) => v.id !== action.payload);
      }
      case "search": {
        return mock.filter((v) =>
          v.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }

      // Add
      case "add": {
        return [
          ...state,
          {
            id: state[state.length - 1].id + 1,
            name: action.payload,
            status: false,
            isEdited: false,
          },
        ];
      }

      // Edit
      case "edit": {
        return state.map((value) => {
          if (value.id == action.payload) {
            action.setSave(value.name);
            return { ...value, isEdited: !value.isEdited };
          } else return value;
        });
      }

      // Save
      case "save": {
        return state.map((value) => {
          if (value.id == action.payload) {
            return { ...value, name: action.save, isEdited: false };
          } else return value;
        });
      }

      default:
        return state;
    }
  };
  const [base, dispatch] = useReducer(reduser, mock);
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState("");
  const [save, setSave] = useState("");
  return (
    <Main>
      <Title>
        <Task_count>{base.length} Tasks</Task_count>
      </Title>

      {/*  */}
      <Search>
        <Search_input
          type="text"
          placeholder="Search task"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search_btn
          onClick={() => dispatch({ type: "search", payload: search })}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Search_btn>
      </Search>

      {/*  */}
      <MainDate>
        {base.length ? (
          base.map((value) => {
            return (
              <Date__item key={value.id}>
                <input
                  id={value.id}
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  onChange={() =>
                    dispatch({ type: "check", payload: value.id })
                  }
                  key={value.id}
                />
                {value.isEdited ? (
                  <input
                    type="text"
                    defaultValue={value.name}
                    style={{
                      height: "30px",
                      width: "50%",
                      fontSize: "20px",
                      borderRadius: "6px",
                      border: "1px solid black",
                      paddingLeft: "6px",
                    }}
                    onChange={(e) => {
                      setSave(e?.target?.value);
                    }}
                  />
                ) : (
                  <label
                    htmlFor={value.id}
                    style={
                      !value.status
                        ? { cursor: "pointer", fontSize: "20px" }
                        : {
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#838383",
                            textDecoration: "line-through",
                          }
                    }
                  >
                    {value.status ? <i>{value.name}</i> : value.name}
                  </label>
                )}
                <div>
                  {!value.isEdited ? (
                    <>
                      {/* Edit */}
                      <DateAdd__btn
                        onClick={() => {
                          dispatch({
                            type: "edit",
                            payload: value.id,
                            setSave,
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </DateAdd__btn>

                      {/* Delete */}
                      <DateAdd__btn
                        onClick={() => {
                          dispatch({
                            type: "delite",
                            payload: value.id,
                          });
                        }}
                        delete="true"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </DateAdd__btn>
                    </>
                  ) : (
                    <>
                      {/* SAVE */}
                      <DateAdd__btn
                        onClick={() =>
                          dispatch({ type: "save", payload: value.id, save })
                        }
                      >
                        <FontAwesomeIcon icon={faFloppyDisk} />
                      </DateAdd__btn>
                      {/* CANCEL */}
                      <DateAdd__btn
                        onClick={() => {
                          dispatch({
                            type: "edit",
                            payload: value.id,
                            setSave,
                          });
                        }}
                        delete="true"
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </DateAdd__btn>
                    </>
                  )}
                </div>
              </Date__item>
            );
          })
        ) : (
          <NotFound>
            <img src={img} alt="Eror"/>
            <h2 style={{ color: "#122348", fontWeight: "900" }}>
              Malumot mavjud emas!
            </h2>
          </NotFound>
        )}
      </MainDate>

      {/* ADD */}
      <DateAdd>
        <DateAdd__input
          type="text"
          placeholder="Add Too..."
          onChange={(e) => setAdd(e.target.value)}
          value={add}
        />
        <DateAdd__btn
          onClick={() => {
            add.length
              ? dispatch({ type: "add", payload: add })
              : alert("Malumot kiriting!");
            setAdd("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </DateAdd__btn>
      </DateAdd>
    </Main>
  );
};

export default TodoApp;
