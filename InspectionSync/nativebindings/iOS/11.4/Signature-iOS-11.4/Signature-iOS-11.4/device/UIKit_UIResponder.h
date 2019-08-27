#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIResponder_symbols(JSContext*);
@protocol UIResponderInstanceExports<JSExport, UIResponderStandardEditActionsInstanceExports_>
@property (readonly,nonatomic) NSUndoManager * undoManager;
@property (readonly,nonatomic) UIResponder * nextResponder;
@property (readonly,nonatomic) BOOL isFirstResponder;
@property (readonly,nonatomic) BOOL canResignFirstResponder;
@property (readonly,nonatomic) BOOL canBecomeFirstResponder;
-(void) motionEnded: (UIEventSubtype) motion withEvent: (UIEvent *) event ;
-(void) pressesBegan: (NSSet *) presses withEvent: (UIPressesEvent *) event ;
-(void) motionBegan: (UIEventSubtype) motion withEvent: (UIEvent *) event ;
-(void) pressesEnded: (NSSet *) presses withEvent: (UIPressesEvent *) event ;
JSExportAs(targetForActionWithSender,
-(id) jstargetForAction: (NSString *) action withSender: (id) sender );
-(void) pressesCancelled: (NSSet *) presses withEvent: (UIPressesEvent *) event ;
-(void) remoteControlReceivedWithEvent: (UIEvent *) event ;
-(void) touchesMoved: (NSSet *) touches withEvent: (UIEvent *) event ;
JSExportAs(canPerformActionWithSender,
-(BOOL) jscanPerformAction: (NSString *) action withSender: (id) sender );
-(void) touchesBegan: (NSSet *) touches withEvent: (UIEvent *) event ;
-(void) touchesEnded: (NSSet *) touches withEvent: (UIEvent *) event ;
-(void) pressesChanged: (NSSet *) presses withEvent: (UIPressesEvent *) event ;
-(void) motionCancelled: (UIEventSubtype) motion withEvent: (UIEvent *) event ;
-(void) touchesCancelled: (NSSet *) touches withEvent: (UIEvent *) event ;
-(BOOL) resignFirstResponder;
-(void) touchesEstimatedPropertiesUpdated: (NSSet *) touches ;
-(BOOL) becomeFirstResponder;
@end
@protocol UIResponderClassExports<JSExport, UIResponderStandardEditActionsClassExports_>
@end
@protocol UIKeyCommandInstanceExports<JSExport, NSCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) NSString * input;
@property (readonly,nonatomic) UIKeyModifierFlags modifierFlags;
@property (copy,nonatomic) NSString * discoverabilityTitle;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(id) jsinit;
@end
@protocol UIKeyCommandClassExports<JSExport, NSCopyingClassExports_, NSSecureCodingClassExports_>
JSExportAs(keyCommandWithInputModifierFlagsAction,
+(UIKeyCommand *) jskeyCommandWithInput: (NSString *) input modifierFlags: (UIKeyModifierFlags) modifierFlags action: (NSString *) action );
JSExportAs(keyCommandWithInputModifierFlagsActionDiscoverabilityTitle,
+(UIKeyCommand *) jskeyCommandWithInput: (NSString *) input modifierFlags: (UIKeyModifierFlags) modifierFlags action: (NSString *) action discoverabilityTitle: (NSString *) discoverabilityTitle );
@end
@protocol UIResponderActivityContinuationCategoryInstanceExports<JSExport>
@property (nonatomic,strong) NSUserActivity * userActivity;
-(void) restoreUserActivityState: (NSUserActivity *) activity ;
-(void) updateUserActivityState: (NSUserActivity *) activity ;
@end
@protocol UIResponderActivityContinuationCategoryClassExports<JSExport>
@end
@protocol UIResponderUIResponderKeyCommandsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * keyCommands;
@end
@protocol UIResponderUIResponderKeyCommandsCategoryClassExports<JSExport>
@end
@protocol UIResponderUIPasteConfigurationSupportingCategoryInstanceExports<JSExport, UIPasteConfigurationSupportingInstanceExports_>
@end
@protocol UIResponderUIPasteConfigurationSupportingCategoryClassExports<JSExport, UIPasteConfigurationSupportingClassExports_>
@end
@protocol UIResponderUIResponderInputViewAdditionsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UIInputViewController * inputViewController;
@property (readonly,nonatomic,strong) __kindof UIView * inputView;
@property (readonly,nonatomic,strong) UITextInputMode * textInputMode;
@property (readonly,nonatomic,strong) UIInputViewController * inputAccessoryViewController;
@property (readonly,nonatomic,strong) NSString * textInputContextIdentifier;
@property (readonly,nonatomic,strong) __kindof UIView * inputAccessoryView;
@property (readonly,nonatomic,strong) UITextInputAssistantItem * inputAssistantItem;
-(void) reloadInputViews;
@end
@protocol UIResponderUIResponderInputViewAdditionsCategoryClassExports<JSExport>
+(void) clearTextInputContextIdentifier: (NSString *) identifier ;
@end
@protocol UIResponderStandardEditActionsInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) copy: (id) sender ;
-(void) makeTextWritingDirectionLeftToRight: (id) sender ;
-(void) toggleItalics: (id) sender ;
-(void) selectAll: (id) sender ;
-(void) makeTextWritingDirectionRightToLeft: (id) sender ;
-(void) toggleUnderline: (id) sender ;
-(void) increaseSize: (id) sender ;
-(void) select: (id) sender ;
-(void) delete: (id) sender ;
-(void) paste: (id) sender ;
-(void) decreaseSize: (id) sender ;
-(void) toggleBoldface: (id) sender ;
-(void) cut: (id) sender ;
@end
@protocol UIResponderStandardEditActionsClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop