#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIInputViewController_symbols(JSContext*);
@protocol UIInputViewControllerInstanceExports<JSExport, UITextInputDelegateInstanceExports_>
@property (readonly,nonatomic) id textDocumentProxy;
@property (nonatomic,strong) UIInputView * inputView;
@property (nonatomic) BOOL hasDictationKey;
@property (readonly,nonatomic) BOOL needsInputModeSwitchKey;
@property (copy,nonatomic) NSString * primaryLanguage;
@property (readonly,nonatomic) BOOL hasFullAccess;
-(void) advanceToNextInputMode;
JSExportAs(requestSupplementaryLexiconWithCompletion,
-(void) jsrequestSupplementaryLexiconWithCompletion: (JSValue *) completionHandler );
-(void) dismissKeyboard;
-(void) handleInputModeListFromView: (UIView *) view withEvent: (UIEvent *) event ;
@end
@protocol UIInputViewControllerClassExports<JSExport, UITextInputDelegateClassExports_>
@end
@protocol UITextDocumentProxyInstanceExports_<JSExport, UIKeyInputInstanceExports_>
@property (readonly,nonatomic) NSString * documentContextBeforeInput;
@property (readonly,nonatomic) NSString * selectedText;
@property (readonly,nonatomic) NSString * documentContextAfterInput;
@property (readonly,copy,nonatomic) NSUUID * documentIdentifier;
@property (readonly,nonatomic) UITextInputMode * documentInputMode;
-(void) adjustTextPositionByCharacterOffset: (NSInteger) offset ;
@end
@protocol UITextDocumentProxyClassExports_<JSExport, UIKeyInputClassExports_>
@end
#pragma clang diagnostic pop