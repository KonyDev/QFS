#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextField_symbols(JSContext*);
@protocol UIViewUITextFieldCategoryInstanceExports<JSExport>
-(BOOL) endEditing: (BOOL) force ;
@end
@protocol UIViewUITextFieldCategoryClassExports<JSExport>
@end
@protocol UITextFieldAnonCategoryInstanceExports<JSExport, UITextDraggableInstanceExports_, UITextDroppableInstanceExports_, UITextPasteConfigurationSupportingInstanceExports_>
@end
@protocol UITextFieldAnonCategoryClassExports<JSExport, UITextDraggableClassExports_, UITextDroppableClassExports_, UITextPasteConfigurationSupportingClassExports_>
@end
@protocol UITextFieldInstanceExports<JSExport, UITextInputInstanceExports_, NSCodingInstanceExports_, UIContentSizeCategoryAdjustingInstanceExports_>
@property (copy,nonatomic) NSString * text;
@property (nonatomic,strong) UIImage * disabledBackground;
@property (nonatomic,strong) UIFont * font;
@property (nonatomic,strong) UIView * rightView;
@property (nonatomic) UITextFieldViewMode rightViewMode;
@property (readwrite,strong) UIView * inputView;
@property (copy,nonatomic) NSString * placeholder;
@property (copy,nonatomic) NSDictionary * typingAttributes;
@property (nonatomic,strong) UIView * leftView;
@property (nonatomic) UITextFieldViewMode clearButtonMode;
@property (nonatomic) CGFloat minimumFontSize;
@property (nonatomic,strong) UIColor * textColor;
@property (copy,nonatomic) NSAttributedString * attributedPlaceholder;
@property (nonatomic,strong) UIImage * background;
@property (getter=isEditing,readonly,nonatomic) BOOL editing;
@property (nonatomic) BOOL clearsOnBeginEditing;
@property (nonatomic) BOOL clearsOnInsertion;
@property (nonatomic) BOOL adjustsFontSizeToFitWidth;
@property (copy,nonatomic) NSAttributedString * attributedText;
@property (nonatomic) UITextFieldViewMode leftViewMode;
@property (nonatomic) BOOL allowsEditingTextAttributes;
@property (copy,nonatomic) NSDictionary * defaultTextAttributes;
@property (nonatomic,weak) id delegate;
@property (readwrite,strong) UIView * inputAccessoryView;
@property (nonatomic) UITextBorderStyle borderStyle;
@property (nonatomic) NSTextAlignment textAlignment;
-(CGRect) editingRectForBounds: (CGRect) bounds ;
-(CGRect) clearButtonRectForBounds: (CGRect) bounds ;
-(void) drawTextInRect: (CGRect) rect ;
-(CGRect) placeholderRectForBounds: (CGRect) bounds ;
-(CGRect) borderRectForBounds: (CGRect) bounds ;
-(CGRect) textRectForBounds: (CGRect) bounds ;
-(void) drawPlaceholderInRect: (CGRect) rect ;
-(CGRect) rightViewRectForBounds: (CGRect) bounds ;
-(CGRect) leftViewRectForBounds: (CGRect) bounds ;
@end
@protocol UITextFieldClassExports<JSExport, UITextInputClassExports_, NSCodingClassExports_, UIContentSizeCategoryAdjustingClassExports_>
@end
@protocol UITextFieldDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) textFieldDidEndEditing: (UITextField *) textField ;
-(BOOL) textFieldShouldClear: (UITextField *) textField ;
-(BOOL) textFieldShouldEndEditing: (UITextField *) textField ;
-(BOOL) textFieldShouldReturn: (UITextField *) textField ;
-(BOOL) textField: (UITextField *) textField shouldChangeCharactersInRange: (NSRange) range replacementString: (NSString *) string ;
-(void) textFieldDidBeginEditing: (UITextField *) textField ;
-(void) textFieldDidEndEditing: (UITextField *) textField reason: (UITextFieldDidEndEditingReason) reason ;
-(BOOL) textFieldShouldBeginEditing: (UITextField *) textField ;
@end
@protocol UITextFieldDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop