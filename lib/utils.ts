import firebase from 'firebase/compat/app';

interface IFirestoreAutograph {
  email: string;
  comment: string;
  timestamp: firebase.firestore.Timestamp;
}

export const docToAutograph = (doc: firebase.firestore.DocumentData) => {
  const data: IFirestoreAutograph = doc.data();
  const date = new Date(data.timestamp!.seconds * 1000);
  return {
    email: data.email,
    comment: data.comment,
    date: date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  };
};
