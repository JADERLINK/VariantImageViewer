﻿/*
ImageGlass Project - Image viewer for Windows
Copyright (C) 2010 - 2022 DUONG DIEU PHAP
Project homepage: https://imageglass.org

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
using ImageGlass.Base;
using ImageGlass.Base.WinApi;
using System.ComponentModel;
using System.Drawing.Drawing2D;

namespace ImageGlass.UI;

public class ModernCheckBox : CheckBox
{

    private ModernControlState _controlState = ModernControlState.Normal;

    private bool _spacePressed = false;
    private int _offset = 1;
    private bool _darkMode = false;
    private IColors ColorPalatte => ThemeUtils.GetThemeColorPalatte(_darkMode);


    #region Property Region

    /// <summary>
    /// Toggles dark mode for this <see cref="ModernButton"/> control.
    /// </summary>
    public bool DarkMode
    {
        get => _darkMode;
        set
        {
            _darkMode = value;

            Invalidate();
        }
    }


    [Category("Appearance")]
    [Description("Offsets the check in the box to avoid a weird bug")]
    [DefaultValue(false)]
    public int Offset
    {
        get { return _offset; }
        set
        {
            _offset = value;
            Invalidate();
        }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new Appearance Appearance
    {
        get { return base.Appearance; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new bool AutoEllipsis
    {
        get { return base.AutoEllipsis; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new Image BackgroundImage
    {
        get { return base.BackgroundImage; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new ImageLayout BackgroundImageLayout
    {
        get { return base.BackgroundImageLayout; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new bool FlatAppearance
    {
        get { return false; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new FlatStyle FlatStyle
    {
        get { return base.FlatStyle; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new Image Image
    {
        get { return base.Image; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new ContentAlignment ImageAlign
    {
        get { return base.ImageAlign; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new int ImageIndex
    {
        get { return base.ImageIndex; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new string ImageKey
    {
        get { return base.ImageKey; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new ImageList ImageList
    {
        get { return base.ImageList; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new ContentAlignment TextAlign
    {
        get { return base.TextAlign; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new TextImageRelation TextImageRelation
    {
        get { return base.TextImageRelation; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new bool ThreeState
    {
        get { return base.ThreeState; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new bool UseCompatibleTextRendering
    {
        get { return false; }
    }

    [Browsable(false)]
    [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
    public new bool UseVisualStyleBackColor
    {
        get { return false; }
    }

    #endregion


    public ModernCheckBox()
    {
        SetStyle(ControlStyles.SupportsTransparentBackColor |
                 ControlStyles.OptimizedDoubleBuffer |
                 ControlStyles.ResizeRedraw |
                 ControlStyles.UserPaint, true);
    }


    private void SetControlState(ModernControlState controlState)
    {
        if (_controlState != controlState)
        {
            _controlState = controlState;
            Invalidate();
        }
    }


    #region Event Handler Region

    protected override void OnMouseMove(MouseEventArgs e)
    {
        base.OnMouseMove(e);

        if (_spacePressed)
            return;

        if (e.Button == MouseButtons.Left)
        {
            if (ClientRectangle.Contains(e.Location))
                SetControlState(ModernControlState.Pressed);
            else
                SetControlState(ModernControlState.Hover);
        }
        else
        {
            SetControlState(ModernControlState.Hover);
        }
    }

    protected override void OnMouseDown(MouseEventArgs e)
    {
        base.OnMouseDown(e);

        if (!ClientRectangle.Contains(e.Location))
            return;

        SetControlState(ModernControlState.Pressed);
    }

    protected override void OnMouseUp(MouseEventArgs e)
    {
        base.OnMouseUp(e);

        if (_spacePressed)
            return;

        SetControlState(ModernControlState.Normal);
    }

    protected override void OnMouseLeave(EventArgs e)
    {
        base.OnMouseLeave(e);

        if (_spacePressed)
            return;

        SetControlState(ModernControlState.Normal);
    }

    protected override void OnMouseCaptureChanged(EventArgs e)
    {
        base.OnMouseCaptureChanged(e);

        if (_spacePressed)
            return;

        var location = Cursor.Position;

        if (!ClientRectangle.Contains(location))
            SetControlState(ModernControlState.Normal);
    }

    protected override void OnGotFocus(EventArgs e)
    {
        base.OnGotFocus(e);

        Invalidate();
    }

    protected override void OnLostFocus(EventArgs e)
    {
        base.OnLostFocus(e);

        _spacePressed = false;

        var location = Cursor.Position;

        if (!ClientRectangle.Contains(location))
            SetControlState(ModernControlState.Normal);
        else
            SetControlState(ModernControlState.Hover);
    }

    protected override void OnKeyDown(KeyEventArgs e)
    {
        base.OnKeyDown(e);

        if (e.KeyCode == Keys.Space)
        {
            _spacePressed = true;
            SetControlState(ModernControlState.Pressed);
        }
    }

    protected override void OnKeyUp(KeyEventArgs e)
    {
        base.OnKeyUp(e);

        if (e.KeyCode == Keys.Space)
        {
            _spacePressed = false;

            var location = Cursor.Position;

            if (!ClientRectangle.Contains(location))
                SetControlState(ModernControlState.Normal);
            else
                SetControlState(ModernControlState.Hover);
        }
    }

    #endregion


    protected override void OnPaint(PaintEventArgs e)
    {
        var g = e.Graphics;
        var rect = e.ClipRectangle;

        var textColor = ColorPalatte.LightText;
        var borderColor = Checked ? ColorPalatte.BlueHighlight : ColorPalatte.GreySelection;
        var fillColor = Checked ? ColorPalatte.BlueHighlight : ColorPalatte.GreyBackground;

        if (Enabled)
        {
            if (_controlState == ModernControlState.Hover)
            {
                borderColor = borderColor.WithBrightness(0.15f);
                fillColor = fillColor.WithBrightness(0.1f);
            }
            else if (_controlState == ModernControlState.Pressed)
            {
                borderColor = borderColor.WithBrightness(-0.15f);
                fillColor = fillColor.WithBrightness(-0.2f);
            }
        }
        else
        {
            textColor = ColorPalatte.DisabledText;
            borderColor = ColorPalatte.GreySelection;
            fillColor = ColorPalatte.GreySelection;
        }

        var initX = Padding.Left;
        var initY = Padding.Top;
        var checkBoxSize = DpiApi.Transform<float>(Font.Size * 1.2f);
        var checkBoxRect = new RectangleF(
            initX,
            initY + checkBoxSize / 4,
            checkBoxSize,
            checkBoxSize);


        // fill checkbox
        var checkBoxBgColor = Checked ? fillColor : ColorPalatte.LightBackground;
        using (var b = new SolidBrush(checkBoxBgColor))
        {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.FillRoundedRectangle(b, checkBoxRect, 2, false);
            g.SmoothingMode = SmoothingMode.None;
        }

        // draw checkbox border
        using (var p = new Pen(borderColor, 1.5f))
        {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.DrawRoundedRectangle(p, checkBoxRect, 2, false);
            g.SmoothingMode = SmoothingMode.None;
        }

        if (Checked)
        {
            var checkMarkThickness = DpiApi.Transform<float>(0.75f * checkBoxSize / 10);

            // draw check mark
            using (var p = new Pen(checkBoxBgColor.InvertBlackOrWhite(), checkMarkThickness))
            {
                p.LineJoin = LineJoin.Round;

                var point1 = new PointF(
                    checkBoxRect.X + (2 * checkBoxRect.Height / 10),
                    checkBoxRect.Y + (5 * checkBoxRect.Height / 10));
                var point2 = new PointF(
                    checkBoxRect.X + (4 * checkBoxRect.Height / 10),
                    checkBoxRect.Y + (8 * checkBoxRect.Height / 10));
                var point3 = new PointF(
                    checkBoxRect.X + (8 * checkBoxRect.Height / 10),
                    checkBoxRect.Y + (2 * checkBoxRect.Height / 10));

                g.SmoothingMode = SmoothingMode.AntiAlias;
                g.DrawLine(p, point1, point2);
                g.DrawLine(p, point2, point3);
                g.SmoothingMode = SmoothingMode.None;
            }
        }

        // draw text
        using (var b = new SolidBrush(textColor))
        {
            var stringFormat = new StringFormat
            {
                LineAlignment = StringAlignment.Center,
                Alignment = StringAlignment.Near,
                Trimming = StringTrimming.EllipsisWord,
            };

            var modRect = new RectangleF(
                checkBoxRect.Right + checkBoxSize / 3,
                initY,
                rect.Width - checkBoxSize - Padding.Horizontal,
                rect.Height - Padding.Vertical);

            g.DrawString(Text, Font, b, modRect, stringFormat);
        }
    }


}
