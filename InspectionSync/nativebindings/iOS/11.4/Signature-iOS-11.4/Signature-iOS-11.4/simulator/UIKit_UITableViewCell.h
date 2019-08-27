#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITableViewCell_symbols(JSContext*);
@protocol UITableViewCellInstanceExports<JSExport, NSCodingInstanceExports_, UIGestureRecognizerDelegateInstanceExports_>
@property (nonatomic,strong) UIView * backgroundView;
@property (readonly,nonatomic,strong) UILabel * textLabel;
@property (readonly,nonatomic) UITableViewCellEditingStyle editingStyle;
@property (nonatomic,strong) UIView * editingAccessoryView;
@property (readonly,copy,nonatomic) NSString * reuseIdentifier;
@property (nonatomic) UIEdgeInsets separatorInset;
@property (nonatomic) BOOL showsReorderControl;
@property (getter=isSelected,nonatomic) BOOL selected;
@property (getter=isHighlighted,nonatomic) BOOL highlighted;
@property (readonly,nonatomic,strong) UIImageView * imageView;
@property (nonatomic) BOOL shouldIndentWhileEditing;
@property (readonly,nonatomic) BOOL showingDeleteConfirmation;
@property (nonatomic) NSInteger indentationLevel;
@property (nonatomic) BOOL userInteractionEnabledWhileDragging;
@property (nonatomic) CGFloat indentationWidth;
@property (nonatomic) UITableViewCellFocusStyle focusStyle;
@property (getter=isEditing,nonatomic) BOOL editing;
@property (readonly,nonatomic,strong) UIView * contentView;
@property (nonatomic,strong) UIView * accessoryView;
@property (readonly,nonatomic,strong) UILabel * detailTextLabel;
@property (nonatomic,strong) UIView * selectedBackgroundView;
@property (nonatomic) UITableViewCellAccessoryType editingAccessoryType;
@property (nonatomic) UITableViewCellSelectionStyle selectionStyle;
@property (nonatomic,strong) UIView * multipleSelectionBackgroundView;
@property (nonatomic) UITableViewCellAccessoryType accessoryType;
-(void) dragStateDidChange: (UITableViewCellDragState) dragState ;
-(void) setEditing: (BOOL) editing animated: (BOOL) animated ;
-(void) prepareForReuse;
JSExportAs(initWithStyleReuseIdentifier,
-(id) jsinitWithStyle: (UITableViewCellStyle) style reuseIdentifier: (NSString *) reuseIdentifier );
-(void) didTransitionToState: (UITableViewCellStateMask) state ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(void) setHighlighted: (BOOL) highlighted animated: (BOOL) animated ;
-(void) setSelected: (BOOL) selected animated: (BOOL) animated ;
-(void) willTransitionToState: (UITableViewCellStateMask) state ;
@end
@protocol UITableViewCellClassExports<JSExport, NSCodingClassExports_, UIGestureRecognizerDelegateClassExports_>
@end
@protocol UITableViewCellUIDeprecatedCategoryInstanceExports<JSExport>
@property (nonatomic,strong) UIColor * textColor;
@property (assign,nonatomic) id target;
@property (nonatomic) NSLineBreakMode lineBreakMode;
@property (nonatomic) BOOL hidesAccessoryWhenEditing;
@property (copy,nonatomic) NSString * text;
@property (nonatomic,strong) UIImage * image;
@property (nonatomic,strong) UIColor * selectedTextColor;
@property (getter=getJsAccessoryAction,setter=setJsAccessoryAction:) NSString* jsaccessoryAction;
@property (getter=getJsEditAction,setter=setJsEditAction:) NSString* jseditAction;
@property (nonatomic,strong) UIImage * selectedImage;
@property (nonatomic,strong) UIFont * font;
@property (nonatomic) NSTextAlignment textAlignment;
JSExportAs(initWithFrameReuseIdentifier,
-(id) jsinitWithFrame: (CGRect) frame reuseIdentifier: (NSString *) reuseIdentifier );
@end
@protocol UITableViewCellUIDeprecatedCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop