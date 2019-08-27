#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAlertView_symbols(JSContext*);
@protocol UIAlertViewInstanceExports<JSExport>
@property (nonatomic) NSInteger cancelButtonIndex;
@property (copy,nonatomic) NSString * title;
@property (readonly,nonatomic) NSInteger firstOtherButtonIndex;
@property (readonly,nonatomic) NSInteger numberOfButtons;
@property (assign,nonatomic) UIAlertViewStyle alertViewStyle;
@property (getter=isVisible,readonly,nonatomic) BOOL visible;
@property (nonatomic,weak) id delegate;
@property (copy,nonatomic) NSString * message;
-(UITextField *) textFieldAtIndex: (NSInteger) textFieldIndex ;
-(void) show;
JSExportAs(initWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles,
-(id) jsinitWithTitle: (NSString *) title message: (NSString *) message delegate: (id) delegate cancelButtonTitle: (NSString *) cancelButtonTitle otherButtonTitles: (NSString *) otherButtonTitles arguments: (NSArray *) args );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(NSString *) buttonTitleAtIndex: (NSInteger) buttonIndex ;
-(void) dismissWithClickedButtonIndex: (NSInteger) buttonIndex animated: (BOOL) animated ;
-(NSInteger) addButtonWithTitle: (NSString *) title ;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
@end
@protocol UIAlertViewClassExports<JSExport>
@end
@protocol UIAlertViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) alertView: (UIAlertView *) alertView willDismissWithButtonIndex: (NSInteger) buttonIndex ;
-(void) willPresentAlertView: (UIAlertView *) alertView ;
-(void) alertView: (UIAlertView *) alertView clickedButtonAtIndex: (NSInteger) buttonIndex ;
-(void) didPresentAlertView: (UIAlertView *) alertView ;
-(void) alertViewCancel: (UIAlertView *) alertView ;
-(void) alertView: (UIAlertView *) alertView didDismissWithButtonIndex: (NSInteger) buttonIndex ;
-(BOOL) alertViewShouldEnableFirstOtherButton: (UIAlertView *) alertView ;
@end
@protocol UIAlertViewDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop