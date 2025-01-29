using System;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEditorInternal;
using UnityEngine;

[CustomEditor(typeof(AlphabetData))]
[CandEditMultipleObjects]
[System.Serializable]
public class AlphabetDataDrawer : ScriptableObject
{
   private ReorderableList AlphabetPlainList; 
    private ReorderableList AlphabetNormalList;
    private ReorderableList AlphabetHighlightedList;
    private ReorderableList AlphabetWrongList;

    private void OnEnable()
    {
       InitializeReorderableList(ref AlphabetPlainList, "AlphabetPlain", "Alphabet Plain");
       InitializeReorderableList(ref AlphabetNormalList, "AlphabetNormal", "Alphabet Normal");
       InitializeReorderableList(ref AlphabetHighlightedList, "AlphabetHighlighted", "Alphabet Highlighted");
       InitializeReorderableList(ref AlphabetWrongList, "AlphabetWrong", "Alphabet Wrong");
    }
    public override void OnInspectorGUI()
    {
       serializedObject.Update();
       AlphabetPlainList.DoLayoutList();
       AlphabetNormalList.DoLayoutList();
       AlphabetHighlightedList.DoLayoutList();
       AlphabetWrongList.DoLayoutList();
       serializedObject.ApplyModifieldProperties
    }

    private void InitializeReorderableList(ref ReorderableList list, string propertyName, string listLabel)
    {
        list = new ReorderableList(serializedObject, serialzedOject.FindProperty(propertyName),
            true, true, true, true);

            list.drawHeaderCallback = (Rect rect) =>
            {
                EditorGUI.LabelField(rect, listLabel);
            };

            var l = list;

            list.drawElementCallback = (Rect rect, int Index, bool isActive, bool isFocused) =>
            {
                var element = l.serializedProperty.GetArrayElementAtIndex(index);
                rect.y +=2;

                EditorGUI.PropertyField(
                    new Rect( rect.x, rect.y, 60, EditorGUIUtility.singleLineHeight), 
                    element.FindPropertyRelative("letter"), GUIContent.none);
            
                EditorGUI.PropertyField(
                   new Rect(rect.x + 70, rect.y, rect.widht - 30, EditorGUIUtility.singleLineHeight),
                   element.FindPropertyRelative("image"), GUIContent.none);
            };
    } 
}
