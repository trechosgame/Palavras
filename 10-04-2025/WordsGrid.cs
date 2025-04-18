using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WordsGrid : MonoBehaviour
{
    public GameData currentGameData;
    public GameObject gridSquarePrefab;
    public AlphabetData alphabetData;

    public float squareOffset = 0.0f;
    public float topPosition;

    private readonly List<GameObject> _squareList = new List<GameObject>();
    void Start()
    {
        
    }

    private void SpaanGridSquares()
    {
        if(currentGameData != null)
        {
          var squareScale = GetSquareScale(new Vector3( 1.5f, 1.5f, 0.1f ));
          foreach (var squares in currentGameData.selectedBoardData.Board)
          {
             
          }
        }
    }
    private Vector3 GetSquareScale(Vector3 defaultScale)
    {
        var finalScale = defaultScale;
        var adjustment = 0.01f;

        while(ShouldScaleDown(finalScale))
        {
           finalScale.x -= adjustment;
           finalScale.y -= adjustment;

           if(finalScale.x <= 0 || finalScale.y <=0)
           {
             finalScale.x = adjustment;
             finalScale.y = adjustment;
             return finalScale;
           }
        }
         return finalScale;
    }


    private bool ShouldScaleDown(Vector3 targetScale)
    {
        var squareRect = gridSquarePrefab.GetComponent<SpriteRenderer>().sprite.rect;
        var squareSize = new Vector2(0f, 0f);
        var startPosition = new Vector2(0f, 0f);

        squareSize.x = (squareRect.width * targetScale.x) + squareOffset;
        squareSize.y = (squareRect.height * targetScale.y) + squareOffset;

        var midWidthPosition = ((currentGameData.selectedBoardData.Columns * squareSize.x) / 2) * 0.01f;
        var midWidthHeight = ((currentGameData.selectedBoardData.Rows -1 * squareSize.y) / 2) * 0.01f;

        startPosition.x = (midWidthPosition != 0) ? midWidthPosition * -1 : midWidthPosition;
        startPosition.y += midWidthHeight;

        return startPosition.x < GetHalfScreenWidth() * -1 || startPosition.y > topPosition;
    }
    private float GetHalfScreenWidth()
    {
        float height = Camera.main.orthographicSize * 2;
        float width = (1.7f * height) * Screen.width / Screen.height;
        return width / 2;
    }
}
