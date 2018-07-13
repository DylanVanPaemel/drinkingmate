import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";
import { GiftedForm, GiftedFormManager } from "react-native-gifted-form";
import moment from "moment";

export default class Profilescreen extends Component {
  currentCafe;
  isloaded = false;

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.isloaded == false) {
      this.currentCafe = this.props.navigation.state.params.cafe;
      console.log(this.currentCafe);
      this.isloaded = true;
      console.log(this.isloaded);
    }
  }

  signOut() {
    firebaseApp
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        this.authUser = null;
      })
      .catch(function(error) {
        // An error happened.
      });
  }

  /*   static navigationOptions = ({ navigation }) => ({
    header: null
  }); */

  render() {
    return (
      <Container>
        <Content scrolleabled={false}>
          <GiftedForm
            formName="myProfile" // GiftedForm instances that use the same name will also share the same states
            openModal={router => {
              this.props.navigation.navigate("Modal", {
                renderContent: router.renderScene,
                onClose: router.onClose,
                getTitle: router.getTitle,
                cafe: this.currentCafe
              });
            }}
            clearOnClose={false} // delete the values of the form when unmounted
            defaults={{
              fullName: this.currentCafe.naam,
              bio: "",
              "gender{${this.currentCafe.regio}}": true,
              password: "abcde",
              country: "FR",
              birthday: new Date(new Date().getFullYear() - 18 + "")
            }}
            validators={{
              fullName: {
                title: "Full name",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [1, 23],
                    message:
                      "{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters"
                  }
                ]
              },
              username: {
                title: "Username",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [3, 16],
                    message:
                      "{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters"
                  },
                  {
                    validator: "matches",
                    arguments: /^[a-zA-Z0-9]*$/,
                    message: "{TITLE} can contains only alphanumeric characters"
                  }
                ]
              },
              password: {
                title: "Password",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [6, 16],
                    message:
                      "{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters"
                  }
                ]
              },
              emailAddress: {
                title: "Email address",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [6, 255]
                  },
                  {
                    validator: "isEmail"
                  }
                ]
              },
              bio: {
                title: "Biography",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [0, 512],
                    message:
                      "{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters"
                  }
                ]
              },
              gender: {
                title: "Gender",
                validate: [
                  {
                    validator: (...args) => {
                      if (args[0] === undefined) {
                        return false;
                      }
                      return true;
                    },
                    message: "{TITLE} is required"
                  }
                ]
              },
              birthday: {
                title: "Birthday",
                validate: [
                  {
                    validator: "isBefore",
                    arguments: [
                      moment()
                        .utc()
                        .subtract(18, "years")
                        .format("YYYY-MM-DD")
                    ],
                    message: "You must be at least 18 years old"
                  },
                  {
                    validator: "isAfter",
                    arguments: [
                      moment()
                        .utc()
                        .subtract(100, "years")
                        .format("YYYY-MM-DD")
                    ],
                    message: "{TITLE} is not valid"
                  }
                ]
              },
              country: {
                title: "Country",
                validate: [
                  {
                    validator: "isLength",
                    arguments: [2],
                    message: "{TITLE} is required"
                  }
                ]
              }
            }}
          >
            <GiftedForm.SeparatorWidget />

            <GiftedForm.TextInputWidget
              name="fullName" // mandatory
              title="Full name"
              image={require("../icons/color/user.png")}
              placeholder="Marco Polo"
              clearButtonMode="while-editing"
            />

            <GiftedForm.TextInputWidget
              name="username"
              title="Username"
              image={require("../icons/color/contact_card.png")}
              placeholder="MarcoPolo"
              clearButtonMode="while-editing"
              onTextInputFocus={(currentText = "") => {
                if (!currentText) {
                  let fullName = GiftedFormManager.getValue(
                    "myProfile",
                    "fullName"
                  );
                  if (fullName) {
                    return fullName.replace(/[^a-zA-Z0-9-_]/g, "");
                  }
                }
                return currentText;
              }}
            />

            <GiftedForm.TextInputWidget
              name="password" // mandatory
              title="Password"
              placeholder="******"
              clearButtonMode="while-editing"
              secureTextEntry={true}
              image={require("../icons/color/lock.png")}
            />

            <GiftedForm.TextInputWidget
              name="emailAddress" // mandatory
              title="Email address"
              placeholder="example@nomads.ly"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              image={require("../icons/color/email.png")}
            />

            <GiftedForm.SeparatorWidget />

            <GiftedForm.ModalWidget
              title="Regio"
              displayValue="regio"
              image={require("../icons/color/gender.png")}
            >
              <GiftedForm.SeparatorWidget />

              <GiftedForm.SelectWidget
                name="regio"
                title="Regio"
                multiple={false}
              >
                <GiftedForm.OptionWidget
                  image={require("../icons/color/female.png")}
                  title="Aalter"
                  value="Aalter"
                />
                <GiftedForm.OptionWidget
                  image={require("../icons/color/male.png")}
                  title="Gent"
                  value="Gent"
                />
              </GiftedForm.SelectWidget>
            </GiftedForm.ModalWidget>

            <GiftedForm.ModalWidget
              title="Birthday"
              displayValue="birthday"
              image={require("../icons/color/birthday.png")}
              scrollEnabled={false}
            >
              <GiftedForm.SeparatorWidget />
              <GiftedForm.DatePickerIOSWidget
                name="birthday"
                mode="date"
                getDefaultDate={() => {
                  return new Date(new Date().getFullYear() - 18 + "");
                }}
              />
            </GiftedForm.ModalWidget>

            <GiftedForm.ModalWidget
              title="Country"
              displayValue="country"
              image={require("../icons/color/passport.png")}
              scrollEnabled={false}
            >
              <GiftedForm.SelectCountryWidget
                code="alpha2"
                name="country"
                title="Country"
                autoFocus={true}
              />
            </GiftedForm.ModalWidget>

            <GiftedForm.ModalWidget
              title="Biography"
              displayValue="bio"
              image={require("../icons/color/book.png")}
              scrollEnabled={true} // true by default
            >
              <GiftedForm.SeparatorWidget />
              <GiftedForm.TextAreaWidget
                name="bio"
                autoFocus={true}
                placeholder="Something interesting about yourself"
              />
            </GiftedForm.ModalWidget>

            <GiftedForm.ErrorsWidget />

            <GiftedForm.SubmitWidget
              title="Sign up"
              widgetStyles={{
                submitButton: {
                  backgroundColor: "#2185D0"
                }
              }}
              onSubmit={(
                isValid,
                values,
                validationResults,
                postSubmit = null,
                modalNavigator = null
              ) => {
                if (isValid === true) {
                  // prepare object
                  values.gender = values.gender[0];
                  values.birthday = moment(values.birthday).format(
                    "YYYY-MM-DD"
                  );
                  var txt = values.bio;
                  console.log(txt);

                  /* Implement the request to your server using values variable
                           ** then you can do:
                           ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
                           ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
                           ** GiftedFormManager.reset('myProfile'); // clear the states of the form manually. 'myProfile' is the formName used
                           */

                  postSubmit();
                }
              }}
            />

            <GiftedForm.NoticeWidget title="By signing up, you agree to the Terms of Service and Privacy Policity." />

            <GiftedForm.HiddenWidget name="tos" value={true} />
          </GiftedForm>
        </Content>
      </Container>
    );
  }
}
